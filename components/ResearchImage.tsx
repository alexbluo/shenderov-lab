import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  show: boolean;
}

const ResearchImage = ({ src, alt, show }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-[10%] my-auto aspect-video h-fit w-full rounded-2xl bg-[#000000] lg:top-0 lg:bottom-0"
        >
          <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResearchImage;
