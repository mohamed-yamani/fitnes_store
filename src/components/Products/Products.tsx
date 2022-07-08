import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$100.00",
    description: "Product 1",
    image: "https://source.unsplash.com/random/400x300",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$200.00",
    description: "Product 2",
    image: "https://source.unsplash.com/random/dogs/",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$300.00",
    description: "Product 3",
    image: "https://source.unsplash.com/nature",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$400.00",
    description: "Product 4",
    image: "https://source.unsplash.com/random/400x300",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$500.00",
    description: "Product 5",
    image: "https://source.unsplash.com/random/400x300",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
