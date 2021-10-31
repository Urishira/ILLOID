import { motion, AnimationProps } from "framer-motion";
import { Image } from "./Image";

type ImageBlockProps = { id: string } & AnimationProps;

export const ImageBlock: React.FC<ImageBlockProps> = ({ id, variants }) => {
  return (
    <motion.div className={`image-block ${id}`} variants={variants}>
      <Image
        src={`/images/${id}.webp`}
        fallback={`/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
