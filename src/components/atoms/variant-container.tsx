import React, { ElementType, ReactElement, useMemo } from 'react';
import { mergeVariants, TVariants } from '../util/variants';

import styled from '@emotion/styled';
const _VariantContainer = styled.div``;

interface IVariantContainer {
  className?: string;
  variants?: TVariants;
  children?: React.ReactNode;
  as?: ElementType<any>;
}

const VariantContainer = ({
  className,
  variants,
  children,
  as = 'div',
}: IVariantContainer): ReactElement => {
  const processedVariants = useMemo(
    () => (variants ? mergeVariants(variants, {}) : []),
    [variants]
  );

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

export { VariantContainer as default, mergeVariants };
export type { TVariants, IVariantContainer };
