import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
const Signup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(null);
  const [signupFail, setSignupFail] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      setError("Passwords do not match");
      setTimeout(() => {
        setError(null);
      }, 1500);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      if (response.ok) {
        setSignupSuccess(true);
        setTimeout(() => {
          setSignupSuccess(false);
          navigate("/login");
        }, 3000);
      }
      if (!response.ok) {
        const data = await response.json();
        setError(data.err || "signup failed");
        setSignupFail(true);

        setTimeout(() => {
          setSignupFail(null);
        }, 1500);
      }
    } catch (err) {
      alert("An error occured");
      console.log(err);
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
          Create Account
        </motion.h2>
        {signupSuccess && (
          <motion.p
            className="bg-green-400 px-20 py-3 mb-2 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Success
          </motion.p>
        )}
        {signupFail && (
          <motion.p
            className="bg-red-400 px-20 py-3 mb-2 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Signup failed
          </motion.p>
        )}
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <motion.div variants={itemVariants}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
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
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpassword"
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
            {isLoading ? <>Entering Details</> : "Sign Up"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
