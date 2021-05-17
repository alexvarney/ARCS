import React, { ElementType, ReactElement } from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { VARIANTS } from '../util/Breakpoints';

type TCSSProperties = React.CSSProperties | SerializedStyles | null;
type TVariantMap = {
  [x: string]: TCSSProperties;
};

interface IVariantContainer {
  className?: string;
  variants?: TVariantMap | TCSSProperties[];
  children?: React.ReactNode;
  as?: ElementType<any>;
}

export const makeVariantBlock = (
  minWidth: number,
  styles: TCSSProperties[]
): SerializedStyles =>
  minWidth === -1
    ? //@ts-ignore
      css`
        ${[...styles]};
      `
    : //@ts-ignore
      css`
        @media (min-width: ${minWidth}px) {
          ${[...styles]};
        }
      `;

const _VariantContainer = styled.div``;

const createVariantMap = (styles: TCSSProperties[]) => {
  const variantKeys = Array.from(VARIANTS.keys());

  const initialReducer: TVariantMap = {};

  const result = styles.reduce((prev, current, index) => {
    const key = variantKeys[index];

    return {
      ...prev,
      [key]: current,
    };
  }, initialReducer);

  return result;
};

const mergeVariants = (
  baseStyles: TVariantMap | TCSSProperties[],
  overrideStyles: TVariantMap | TCSSProperties[]
) => {
  const variantEntries = Array.from(VARIANTS.entries());

  const _base = Array.isArray(baseStyles)
    ? createVariantMap(baseStyles)
    : baseStyles;
  const _override = Array.isArray(overrideStyles)
    ? createVariantMap(overrideStyles)
    : overrideStyles;

  const elementVariants = variantEntries.reduce(
    (prev: TCSSProperties[], curr: [string, number]) => {
      const [key, minWidth] = curr;

      const base = _base[key];
      const override = _override[key];

      if (!base && !override) return prev;

      return [...prev, makeVariantBlock(minWidth, [base, override])];
    },
    []
  );

  return elementVariants;
};

const VariantContainer = ({
  className,
  variants,
  children,
  as = 'div',
}: IVariantContainer): ReactElement => {
  const processedVariants = variants ? mergeVariants(variants, {}) : [];

  return (
    <_VariantContainer
      as={as}
      className={className}
      //@ts-ignore
      css={[...processedVariants]}
    >
      {children}
    </_VariantContainer>
  );
};

export default VariantContainer;
