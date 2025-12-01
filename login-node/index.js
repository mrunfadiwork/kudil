const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS sebagai view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware untuk baca body form
app.use(bodyParser.urlencoded({ extended: true }));

// User dummy (contoh)
const USER = {
  username: "rafii",
  password: "12345"
};

// Redirect root ke /login
app.get("/", (req, res) => {
  res.redirect("/login");
});

// GET: tampilkan form login
app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

// POST: proses login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    return res.send("Login successful! 🎉");
  }

  // kalau salah → kirim error ke view
  return res.render("login", { error: "Invalid username or password ❌" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
