import { css } from '@emotion/react';
import VC from '../components/atoms/variant-container';
import { Breakpoint as B } from '../components/util/config';

// markup
const IndexPage = () => {
  return (
    <VC
      variants={{
        [B.base]: { padding: '0.5rem', border: '1px solid red' },
        [B.md]: { padding: '1rem' },
        [B.lg]: css`
          padding: 1.5rem;
        `,
        [B.xl]: css`
          color: #fff;
          background-color: #000;
        `,
      }}
    >
      <VC as="h1" variants={{ base: { marginTop: 0 } }}>
        Main Page
      </VC>

      <VC
        as="p"
        variants={[{ margin: 0, padding: 0 }, null, { color: 'orange' }]}
      >
        Hello this is a VariantContainer paragraph
      </VC>
    </VC>
  );
};

export default IndexPage;
