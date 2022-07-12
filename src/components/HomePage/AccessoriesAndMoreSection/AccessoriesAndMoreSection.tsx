import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardMedia,
  Typography,
  useMediaQuery,
  Divider,
} from "@material-ui/core";
import { AccessoriesAndMoreSectionCard } from "./AccessoriesAndMoreSectionCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,

  height: "100%",
  textAlign: "center",
  color: theme.palette.text.secondary,
  overflow: "hidden",
  cursor: "pointer",

  img: {
    width: "100%",
    height: "100%",
    // full height of the item
    objectFit: "cover",
    objectPosition: "center",
  },
  //hover effect
  "&:hover": {
    img: {
      transform: "scale(1.01)",
      transition: "all 0.5s ease-in-out",
    },
  },
}));

export default function AccessoriesAndMoreSection() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} marginTop={5}>
        <Grid item xs={12} md={6} height={isMobile ? "100vw" : "35vw"}>
          <Item>
            <AccessoriesAndMoreSectionCard
              image="http://www.adlittle.com/sites/default/files/events/corporate_startup_visual-min.jpg"
              title="APPAREL AND FOOTWEAR"
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={6} height={isMobile ? "100vw" : "35vw"}>
          <Item>
            <AccessoriesAndMoreSectionCard
              image="https://149718753.v2.pressablecdn.com/wp-content/uploads/2022/02/Exercise-Bikes-Indoor-Cycling-Equipment-Montreal-1024x768.jpg"
              title="ACCESSORIES"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
