import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import "../App.css";
const Login = () => {
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Login failed");
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
      if (response.ok) {
        setSuccess("Login successful");
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setTimeout(() => {
          setSuccess(null);
          navigate("/dashboard");
        }, 3000);
      }
    } catch (err) {
      setError("Error logging in ");
      console.log(err);
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };
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
        {error && (
          <motion.p
            className="bg-red-400 px-20 py-3 mb-2 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {error}
          </motion.p>
        )}
        {success && (
          <motion.p
            className="bg-success-400 px-20 py-3 mb-2 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {success}
          </motion.p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <motion.div variants={itemVariants}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              type="password"
              placeholder="password"
              name="password"
              required
              onChange={handleChange}
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
