const { ConstructionOutlined } = require("@mui/icons-material");

const router = require("express").Router();

const key1 = require("bestbuy")("dcQWrkKAOGwL1Re2HMUXZhuc");
const key2 = require("bestbuy")("X6B25uJmm0ZmNiuGiYoTN44J");
const key3 = require("bestbuy")("nSXdVIwLA96udiH7uteA45US");

// pageSize is number of products per query to the API
// productsPerPage is number of products displayed per page on the front end
const pageSize = 90;
const productsPerPage = 30;

module.exports = router;

router.get("/category", async (req, res, next) => {
  try {
    //This was test code, but it will be used later as a reference
    const data = await randomKey().products(`categoryPath.name=Video Games*`, {
      show: "all",
      pageSize: 90,
    });
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// Gonna stick to showing all for any search, for development purposes
router.get("/:page/:search", async (req, res, next) => {
  const search = req.params.search;
  const page = Math.ceil((req.params.page * productsPerPage) / pageSize);
  try {
    const data = await randomKey().products(
      `platform=*&class=VIDEO GAME SOFTWARE*&(${querify(search)})`,
      { show: "all", pageSize, page: page }
    );
    data.querySize = pageSize;
    productsArraySlicer(data, productsPerPage);
    data.currentPage = parseInt(req.params.page);
    data.totalPages = Math.ceil(data.total / data.productsPerPage);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:page", async (req, res, next) => {
  const page = Math.ceil((req.params.page * productsPerPage) / pageSize);

  try {
    const data = await randomKey().products(
      `platform=*&class=VIDEO GAME SOFTWARE*`,
      {
        show: "class,sku,regularPrice,longDescription,image,albumTitle,platform,largeFrontImage,details",
        pageSize,
        page: page,
      }
    );

    //Gives the allProducts payload useful information to use on the front end
    data.querySize = pageSize;
    productsArraySlicer(data, productsPerPage);
    data.currentPage = parseInt(req.params.page);
    data.totalPages = Math.ceil(data.total / data.productsPerPage);

    res.json(data);
  } catch (err) {
    next(err);
  }
});

// Buisness logic

const querify = (str) => {
  return str
    .split(" ")
    .map((word) => "search=" + word)
    .join("&");
};

const randomKey = () => {
  const random = Math.random();
  if (random < 0.333) return key1;
  else if (random < 0.6667) return key2;
  else return key3;
};

const productsArraySlicer = (data, productsPerPage = 30) => {
  for (let i = 0; i < data.products.length; i += productsPerPage) {
    pageNumber =
      Math.floor(i / productsPerPage) +
      Math.floor((data.querySize / productsPerPage) * (data.currentPage - 1)) +
      1;
    data[pageNumber] = data.products.slice(i, i + productsPerPage);
  }
  data.productsPerPage = productsPerPage;
  return data;
};
