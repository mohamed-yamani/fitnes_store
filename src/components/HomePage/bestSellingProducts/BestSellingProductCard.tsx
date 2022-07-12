import React from "react";
import { Box, Typography, useMediaQuery, Grid, Paper } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import useStyles from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { styled } from "@mui/material/styles";

interface props {
  image: string;
  name: string;
  price: number;
  rating: number;
}

const BestSellingProductCard = (props: props) => {
  const classes = useStyles();
  const { image, name, price, rating } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          className={classes.card}
          sx={{
            flexGrow: 1,
            borderColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className={classes.image} src={image} alt={image} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">
          <span>{rating}</span> Reviews
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">{name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          <span>{price}</span> Dhs
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BestSellingProductCard;
