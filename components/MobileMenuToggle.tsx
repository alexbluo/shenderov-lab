import { motion } from "framer-motion";

const Path = (props: any) => {
  return (
    <motion.path
      className="stroke-green-apple"
      strokeWidth="3"
      strokeLinecap="round"
      {...props}
    />
  );
};

interface Props {
  open: boolean;
  handleClick: () => void;
}

const MobileMenuToggle = ({ open, handleClick }: Props) => {
  return (
    <motion.button
      className="mr-6 block sm:hidden"
      animate={open ? "open" : "closed"}
      onClick={handleClick}
    >
      <svg className="" width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default MobileMenuToggle;
