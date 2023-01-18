const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["firstName", "lastName", "image", "id", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    console.log("MADE IT TO API/USERS/ADDTOCART");
    const userToUpdate = await User.findByPk(req.params.userId);
    const updatedUserCart = await userToUpdate.cart.update(req.body);
    res.status(200).send(updatedUserCart);
  } catch (err) {
    next(err);
  }
});
