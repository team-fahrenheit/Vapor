const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const lowerCaseEmail = email.toLowerCase();
    res.send({ token: await User.authenticate({ lowerCaseEmail, password }) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  let { email } = req.body;
  email = email.toLowerCase();
  try {
    const emailAlreadyExists = await User.findOne({
      where: {
        email: email,
      },
    });
    if (emailAlreadyExists) {
      res.send("Email already exists!");
    } else {
      const { firstName, lastName, password, userType } = req.body;
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        userType,
      });
      res.send({ token: await user.generateToken() });
    }
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
