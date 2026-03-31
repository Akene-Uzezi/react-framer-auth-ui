const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  const { username, password } = req.body;
  const user = new User(username, password);
  if (await user.userExists()) {
    return res.status(409).json({
      message: "Username already exists",
      err: "Username already exists",
    });
  }
  try {
    await user.saveUser();
    res.json({ message: "signup successful" });
  } catch (err) {
    res.json({ err, message: "signup failed" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByUsername(username);
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = await User.getToken(user._id);
    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } else {
    res.status(401).json({
      message: "Invalid username or password",
      error: "invalid credentials",
    });
  }
};

module.exports = {
  signup,
  login,
};
