import { mergeVariants } from '../util/variants';
import VC, { IVariantContainer } from './variant-container';

interface ITextProps extends IVariantContainer {}

const Text = ({ children, as = 'p', ...rest }: ITextProps) => {
  return (
    <VC {...rest} as={as}>
      {children}
    </VC>
  );
};

const Heading = ({ children, variants, as = 'h1', ...rest }: ITextProps) => (
  <Text
    {...rest}
    variants={mergeVariants([{ gridColumn: '1/-1', margin: 0 }], variants)}
    as={as}
  >
    {children}
  </Text>
);

Text.Heading = Heading;

export default Text;
