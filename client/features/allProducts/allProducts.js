import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectProducts, fetchAllProducts } from "./allProductsSlice";
import {
	Box,
	Card,
	CardMedia,
	CardContent,
	IconButton,
	Typography,
	Pagination,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AllProducts = () => {
	const dispatch = useDispatch();
	const allProducts = useSelector(selectProducts);

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	const handlePageChange = (event) => {
		dispatch(fetchAllProducts(parseInt(event.target.innerText)));
	};

	if (allProducts.products) {
		return (
			<div>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-around",
						alignContent: "space-around",
						width: 1000,
						height: 600,
						border: 1,
						backgroundColor: "blue",
					}}
				>
					{allProducts.products.map((product) => (
						<Card
							variant="outlined"
							sx={{
								width: 190,
								height: 270,
								backgroundColor: "orange",
							}}
							key={product.sku}
						>
							<CardMedia
								sx={{
									width: 150,
									height: 150,
									margin: "auto",
									marginTop: 1,
									border: 1,
									borderColor: "transparent",
									borderRadius: 3,
								}}
								image={product.image}
								title={product.name}
							/>
							<CardContent>
								<Typography variant="body2" sx={{ textAlign: "center" }}>
									{product.albumTitle}
								</Typography>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}
								>
									<Typography variant="body2" color="text.secondary">
										{product.regularPrice}
									</Typography>
									<IconButton aria-label="shopping-cart-button">
										<ShoppingCartIcon />
									</IconButton>
								</Box>
							</CardContent>
						</Card>
					))}
				</Box>
				<Pagination
					count={allProducts.totalPages}
					onChange={handlePageChange}
				/>
			</div>
		);
	}
};

export default AllProducts;
