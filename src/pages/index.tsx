import { css } from '@emotion/react';
import VC from '../components/atoms/variant-container';
import Grid from '../components/atoms/grid';
import Text from '../components/atoms/text';

// markup
const IndexPage = () => {
  return (
    <VC
      variants={[
        css`
          background-color: #f6f6f6;
          min-height: 100vh;
        `,
      ]}
    >
      <Grid.Layout>
        <Text.Heading as="h1" variants={[{ textAlign: 'center' }]}>
          Hello, World
        </Text.Heading>
        <VC
          variants={[
            { gridColumn: '2 / -2' },
            null,
            { gridColumn: '3 / -3' },
            { gridColumn: '4 / -4' },
          ]}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            fugiat quo reiciendis quaerat corrupti unde ratione voluptates quas
            magni facere odit eligendi harum, perspiciatis at ipsum libero
            ducimus est excepturi. Eaque ratione adipisci eum, voluptas deleniti
            dolorum vel sint inventore. Fuga delectus, rem ducimus error
            accusamus ipsa doloremque repudiandae quod voluptatum et, amet,
            nostrum quas rerum eligendi ullam eos repellat. Consequatur eos
            autem odit perspiciatis? Ducimus quis quam ut odit voluptatem
            dolores quo itaque enim neque nostrum rerum sed tempora quod,
            possimus quia libero quasi distinctio perferendis cum eveniet harum.
            Atque aliquam recusandae ut totam alias magni harum commodi illo
            voluptates ipsum, magnam sapiente! Sapiente sequi, maxime id aliquam
            quae unde neque, suscipit enim ipsa fugit reiciendis possimus
            recusandae voluptas.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            fugiat quo reiciendis quaerat corrupti unde ratione voluptates quas
            magni facere odit eligendi harum, perspiciatis at ipsum libero
            ducimus est excepturi. Eaque ratione adipisci eum, voluptas deleniti
            dolorum vel sint inventore. Fuga delectus, rem ducimus error
            accusamus ipsa doloremque repudiandae quod voluptatum et, amet,
            nostrum quas rerum eligendi ullam eos repellat. Consequatur eos
            autem odit perspiciatis? Ducimus quis quam ut odit voluptatem
            dolores quo itaque enim neque nostrum rerum sed tempora quod,
            possimus quia libero quasi distinctio perferendis cum eveniet harum.
            Atque aliquam recusandae ut totam alias magni harum commodi illo
            voluptates ipsum, magnam sapiente! Sapiente sequi, maxime id aliquam
            quae unde neque, suscipit enim ipsa fugit reiciendis possimus
            recusandae voluptas.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            fugiat quo reiciendis quaerat corrupti unde ratione voluptates quas
            magni facere odit eligendi harum, perspiciatis at ipsum libero
            ducimus est excepturi. Eaque ratione adipisci eum, voluptas deleniti
            dolorum vel sint inventore. Fuga delectus, rem ducimus error
            accusamus ipsa doloremque repudiandae quod voluptatum et, amet,
            nostrum quas rerum eligendi ullam eos repellat. Consequatur eos
            autem odit perspiciatis? Ducimus quis quam ut odit voluptatem
            dolores quo itaque enim neque nostrum rerum sed tempora quod,
            possimus quia libero quasi distinctio perferendis cum eveniet harum.
            Atque aliquam recusandae ut totam alias magni harum commodi illo
            voluptates ipsum, magnam sapiente! Sapiente sequi, maxime id aliquam
            quae unde neque, suscipit enim ipsa fugit reiciendis possimus
            recusandae voluptas.
          </Text>
        </VC>
      </Grid.Layout>
    </VC>
  );
};

export default IndexPage;
