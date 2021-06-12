import VC, { mergeVariants, IVariantContainer } from './variant-container';
import { css } from '@emotion/react';
import React from 'react';
import { LAYOUT_MAX_WIDTH } from '../util/config';

interface IGridProps extends IVariantContainer {
  columns?: number; //Number of columns
}

const Grid = ({ children, variants, columns = 12, ...rest }: IGridProps) => {
  return (
    <VC
      variants={mergeVariants(variants, [
        css`
          display: grid;
          grid-template-columns: repeat(${columns}, 1fr);
        `,
      ])}
      {...rest}
    >
      {children}
    </VC>
  );
};

interface ILayoutGridProps extends IGridProps {
  children?: React.ReactNode;
}

const LayoutGrid = ({ children, variants, ...rest }: ILayoutGridProps) => (
  <Grid
    variants={mergeVariants(variants, [
      css`
        padding: 0 2rem;
        max-width: ${LAYOUT_MAX_WIDTH + 'px'};
        margin: 0 auto;
        grid-column-gap: 1rem;
        overflow: hidden;
      `,
    ])}
    {...rest}
  >
    {children}
  </Grid>
);

Grid.Layout = LayoutGrid;

export default Grid;
