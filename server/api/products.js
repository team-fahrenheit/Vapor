const router = require("express").Router();
const key1 = require("bestbuy")("dcQWrkKAOGwL1Re2HMUXZhuc");
const key2 = require("bestbuy")("X6B25uJmm0ZmNiuGiYoTN44J");

module.exports = router;

const querify = (str) => {
  return str
    .split(" ")
    .map((word) => "&search=" + word)
    .join("");
};

const randomKey = () => {
  if (Math.random() > 0.5) return key1;
  return key2;
};

const productsArraySlicer = (data, productsPerPage = 25) => {
  for (let i = 0; i < data.products.length; i += productsPerPage) {
    const pageNumber = i + 1;
    data[pageNumber] = data.products.slice(i, i + productsPerPage);
    return data;
  }
};

router.get("/:page/:search", async (req, res, next) => {
  const search = req.params.search;
  const page = req.params.page;
  try {
    const data = await randomKey().products(
      `(search=video&search=games` + `${querify(search)})`,
      { show: "all", pageSize: 100, page: page }
    );
    productsArraySlicer(data, 25);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:page", async (req, res, next) => {
  const search = req.params.search;
  const page = req.params.page;
  try {
    const data = await randomKey().products(`(search=video&search=games)`, {
      show: "all",
      pageSize: 100,
      page: page,
    });
    productsArraySlicer(data, 25);
    res.json(data);
  } catch (err) {
    next(err);
  }
});
