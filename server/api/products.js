const router = require("express").Router();
const bby = require("bestbuy")("X6B25uJmm0ZmNiuGiYoTN44J");
module.exports = router;

const querify = (str) => {
  return str
    .split(" ")
    .map((word) => "&search=" + word)
    .join("");
};

router.get("/:page/:search", async (req, res, next) => {
  const search = req.params.search;
  const page = req.params.page;
  try {
    const data = await bby.products(
      `(search=video&search=games&search=digital` + `${querify(search)})`,
      { show: "all", pageSize: 10, page: page }
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:page", async (req, res, next) => {
  const search = req.params.search;
  const page = req.params.page;
  try {
    const data = await bby.products(
      `(search=video&search=games&search=digital)`,
      { show: "all", pageSize: 10, page: page }
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});
