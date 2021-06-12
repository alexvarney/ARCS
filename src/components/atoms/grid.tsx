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
      variants={mergeVariants(
        [
          css`
            display: grid;
            grid-template-columns: repeat(${columns}, 1fr);
          `,
        ],
        variants
      )}
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
    variants={mergeVariants(
      [
        css`
          padding: 0 1rem;
          max-width: ${LAYOUT_MAX_WIDTH + 'px'};
          margin: 0 auto;
          grid-column-gap: 1rem;
          overflow: hidden;
        `,
        css`
          padding: 0 2rem;
        `,
        css`
          padding: 0 4rem;
        `,
      ],
      variants
    )}
    {...rest}
  >
    {children}
  </Grid>
);

Grid.Layout = LayoutGrid;

export default Grid;
