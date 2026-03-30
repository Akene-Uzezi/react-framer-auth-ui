import { motion } from "motion/react";
import { useState } from "react";
import "../App.css";
const Login = () => {
  const [isLoading, setIsLoading] = useState(null);
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.8, staggerChildren: 0.2, ease: "easeInOut" },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { ease: "easeInOut" },
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold mb-6 text-black"
        >
          Login
        </motion.h2>

        <form className="flex flex-col gap-4">
          <motion.div variants={itemVariants}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              type="password"
              placeholder="password"
              name="password"
              required
              className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </motion.div>
          <motion.button
            type="submit"
            disabled={isLoading}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-indigo-600 text-white py-3 rounded-lg font-bold mt-2 disabled:opacity-70"
          >
            {isLoading ? <>Entering Details</> : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
