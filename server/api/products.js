const router = require("express").Router();
const bby = require("bestbuy")("X6B25uJmm0ZmNiuGiYoTN44J");
module.exports = router;

// pageSize is currently 10, max is 100, to reduce our limited time spent querying with API key
router.get("/:page", async (req, res, next) => {
	const page = req.params.page;
	try {
		const data = await bby.products(
			"(search=video&search=games&search=digital)",
			{ show: "all", pageSize: 10, page: page }
		);
		res.json(data);
	} catch (err) {
		next(err);
	}
});
