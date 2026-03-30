import { Link } from "react-router-dom";
import { motion } from "motion/react";
const MotionLink = motion.create(Link);
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import "./navbar.css";
const Navbar = () => {
  const getVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="flex gap-4 items-center bg-slate-950 p-4" id="navbar">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-xl font-bold"
      >
        My App
      </motion.h1>
      <nav id="nav">
        <motion.ul
          variants={getVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="flex gap-6 item-center"
        >
          <MotionLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
            to="/"
            element={<Home />}
          >
            Home
          </MotionLink>

          <MotionLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
            to="/login"
            element={<Login />}
          >
            Login
          </MotionLink>

          <MotionLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
            to="/signup"
            element={<Signup />}
          >
            Signup
          </MotionLink>
        </motion.ul>
      </nav>
    </div>
  );
};

export default Navbar;
