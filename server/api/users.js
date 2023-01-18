const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  const token = req.headers;
  console.log("start token------" + token + " --------end token ------");
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["firstName", "lastName", "image", "id", "email", "userType"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
