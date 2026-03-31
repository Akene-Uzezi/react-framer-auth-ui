import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Note: ensure you are using 'framer-motion' or 'motion/react' consistently

// Define variants outside to prevent re-creation on render
const navVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.1, // Staggering requires children to have variants too
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
  return (
    <motion.div
      className="flex gap-4 items-center bg-slate-950 p-4"
      id="navbar"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-xl font-bold"
      >
        My App
      </motion.h1>

      <motion.nav id="nav">
        <motion.ul
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-6 item-center"
        >
          {/* Home Link */}
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            <Link
              to="/"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
            >
              Home
            </Link>
          </motion.li>

          {/* Login Link */}
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
            >
              Login
            </Link>
          </motion.li>

          {/* Signup Link */}
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
            >
              Signup
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
