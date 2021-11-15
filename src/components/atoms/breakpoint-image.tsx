import {
  GatsbyImage,
  getImage,
  withArtDirection,
  GatsbyImageProps,
  ImageDataLike,
} from 'gatsby-plugin-image';
import { BreakpointSizes, Breakpoint } from '../util/config';

interface IBreakpointImage extends Omit<GatsbyImageProps, 'image'> {
  data: {
    [x in Breakpoint]?: ImageDataLike;
  };
}

const BreakpointImage = ({ data, ...imageProps }: IBreakpointImage) => {
  if (!data[Breakpoint.base]) {
    console.error('Did not recieve base size for BreakpointIamge');
  }

  const base: ImageDataLike = data[Breakpoint.base]!;

  const imagesKeys = Object.keys(data)
    .filter((key) => key !== Breakpoint.base)
    .sort(
      (keyA, keyB) =>
        (BreakpointSizes.get(keyB as Breakpoint) ?? 0) -
        (BreakpointSizes.get(keyA as Breakpoint) ?? 0)
    )
    .map((key) => {
      const image = data[key as Breakpoint]!;
      const minWidth = BreakpointSizes.get(key as Breakpoint);

      return {
        media: `(min-width: ${minWidth}px)`,
        image: getImage(image),
      };
    })
    .filter((x) => x.image !== undefined);

  //@ts-ignore
  const images = withArtDirection(getImage(base), imagesKeys);

  //@ts-ignore
  return (
    <GatsbyImage className="art-directed" image={images} {...imageProps} />
  );
};

export default BreakpointImage;
