let users = [];

const registerUser = (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.json({ message: "User registered" });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful" });
};

module.exports = { registerUser, loginUser };