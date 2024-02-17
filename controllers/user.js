const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../services/auth");

async function handleCreateUser(req, res) {
    const { name, email, username, password } = req.body;
    if (!email || !username || !password || !name) return res.status(403).send({ message: "Please enter all required fields" });
    await User.create({
        name, email, username, password
    });
    return res.render('home', {
        user: name,
        email: email
    });
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user)
        return res.render("login", {
            error: "Invalid Username or Password",
        });

    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    return res.redirect("/");
}

module.exports = {
    handleCreateUser,
    handleUserLogin,
};
