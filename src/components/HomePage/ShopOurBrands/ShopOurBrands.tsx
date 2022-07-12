import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Divider,
  Card,
  Paper,
  CardMedia,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import useStyles from "./styles";

export const ShopOurBrands = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");
  const isLaptop = useMediaQuery("(max-width:1280px)");
  const isDesktop = useMediaQuery("(max-width:1920px)");
  const isWidescreen = useMediaQuery("(max-width:2560px)");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        className={classes.title}
        variant="h4"
        gutterBottom
        align="center"
      >
        {/* BestSellingProducts */}
        BEST SELLING PRODUCTS
      </Typography>
      <div style={{ width: "100%" }}>
        <Box
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          width="100%"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100vw",

            bgcolor: "red",
            borderRadius: 1,
          }}
        >
          <CardMedia
            style={{
              height: "220px",
              width: "220px",
              backgroundColor: "red",
              display: "initial",
            }}
            component="img"
            image="https://cdn.shopify.com/s/files/1/0728/8355/files/brand-adidas.jpg?v=1630483710"
            alt="Paella dish"
          />
          <CardMedia
            style={{ height: "220px", width: "220px", display: "initial" }}
            component="img"
            image="https://cdn.shopify.com/s/files/1/0728/8355/files/brand-blkbox.jpg?v=1630483711"
            alt="Paella dish"
          />
          <CardMedia
            style={{ height: "220px", width: "220px", display: "initial" }}
            component="img"
            image="https://cdn.shopify.com/s/files/1/0728/8355/files/brand-hyperice.jpg?v=1630483710"
            alt="Paella dish"
          />
          <CardMedia
            style={{ height: "220px", width: "220px", display: "initial" }}
            component="img"
            image="https://cdn.shopify.com/s/files/1/0728/8355/files/brand-nike.jpg?v=1630483710"
            alt="Paella dish"
          />
          <CardMedia
            style={{ height: "220px", width: "220px", display: "initial" }}
            component="img"
            image="https://cdn.shopify.com/s/files/1/0728/8355/files/brand-stance.jpg?v=1630483710"
            alt="Paella dish"
          />
          <CardMedia
            style={{ height: "220px", width: "220px", display: "initial" }}
            component="img"
            image="https://cdn.shopify.com/s/files/1/0728/8355/files/brand-underarmour.jpg?v=1630483710"
            alt="Paella dish"
          />
        </Box>
      </div>
    </Box>
  );
};
