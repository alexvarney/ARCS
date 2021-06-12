import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { BreakpointSizes, Breakpoint } from './config';

export type TCSSProperties = React.CSSProperties | SerializedStyles | null;

export type TVariantMap = {
  [x in Breakpoint]?: TCSSProperties;
};

export type TVariants = TVariantMap | TCSSProperties[];

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
  const variantKeys = Array.from(BreakpointSizes.keys());

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
  baseStyles?: TVariants,
  overrideStyles?: TVariants
) => {
  const variantEntries = Array.from(BreakpointSizes.entries());

  const _base = Array.isArray(baseStyles)
    ? createVariantMap(baseStyles)
    : baseStyles;
  const _override = Array.isArray(overrideStyles)
    ? createVariantMap(overrideStyles)
    : overrideStyles;

  const elementVariants = variantEntries.reduce(
    (prev: TCSSProperties[], curr: [Breakpoint, number]) => {
      const [key, minWidth] = curr;

      const styles: TCSSProperties[] = [];

      if (_base && _base[key]) {
        styles.push(_base[key]!);
      }
      if (_override && _override[key]) {
        styles.push(_override[key]!);
      }

      if (!styles.length) return prev;

      return [...prev, makeVariantBlock(minWidth, styles)];
    },
    []
  );

  return elementVariants;
};
