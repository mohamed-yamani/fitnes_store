import React from "react";
import Box from "@mui/material/Box";
import { Card, CardMedia, Typography, Divider } from "@material-ui/core";
import useStyles from "./styles";

interface props {
  image: string;
  title: string;
}

export const AccessoriesAndMoreSectionCard = (props: props) => {
  const classes = useStyles();
  const { image, title } = props;

  return (
    <Card style={{ height: "100%", width: "100%", backgroundColor: "red" }}>
      <div style={{ height: "100%", width: "100%" }}>
        <div
          style={{
            position: "relative",
            backgroundColor: "green",
            height: "100%",
            width: "100%",
          }}
        >
          <CardMedia
            style={{ height: "100%", width: "100%" }}
            component="img"
            image={image}
          />
          <Box
            style={{
              position: "absolute",
              color: "white",
              bottom: "2%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
            }}
          >
            <Typography variant="h1" className={classes.title}>
              {title}
            </Typography>
            <Divider className={classes.divider} />
          </Box>
        </div>
      </div>
    </Card>
  );
};
