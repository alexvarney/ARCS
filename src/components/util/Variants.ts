import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { VARIANTS } from '../util/Breakpoints';

export type TCSSProperties = React.CSSProperties | SerializedStyles | null;

export type TVariantMap = {
  [x: string]: TCSSProperties;
};

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

export const createVariantMap = (styles: TCSSProperties[]) => {
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

export const mergeVariants = (
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
