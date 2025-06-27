import { motion, AnimatePresence } from "motion/react";
import { containerVariants, itemVariants } from "@/utils";

type MobileMenuProps = {
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
};

const MobileMenu = ({ handleMenu, showMenu }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {showMenu ? (
        <motion.section
          initial={{ height: 0 }}
          animate={{ height: "25vh" }}
          exit={{
            height: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className="md:hidden fixed top-16 left-0 w-full bg-[#040C0C] px-4 flex-col z-50"
        >
          <motion.ul
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className=" flex gap-6 py-16 px-4 flex-col"
          >
            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
            >
              <a href="#features" onClick={() => handleMenu(!showMenu)}>
                features
              </a>
            </motion.li>
            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
            >
              <a href="#pricing" onClick={() => handleMenu(!showMenu)}>
                pricing
              </a>
            </motion.li>

            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
            >
              <a href="#contact" onClick={() => handleMenu(!showMenu)}>
                about
              </a>
            </motion.li>
          </motion.ul>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileMenu;
