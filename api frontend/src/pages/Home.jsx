import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, staggerChildren: 0.3 }}
      className="text-white font-lg text-center m-4 ml-3 "
    >
      <h1 className="mb-3">Welcome</h1>
      <Link
        className="mr-4 bg-blue-600 rounded-lg px-6 py-2 mt-5"
        to="/login"
        element={<Login />}
      >
        Login
      </Link>
      <Link
        className="mr-4 bg-blue-600 rounded-lg px-6 py-2 mt-5"
        to="/signup"
        element={<Signup />}
      >
        Signup
      </Link>
    </motion.div>
  );
};

export default Home;
