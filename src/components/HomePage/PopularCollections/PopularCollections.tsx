import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

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
      transform: "scale(1.1)",
      transition: "all 0.5s ease-in-out",
    },
  },
}));

export default function PopularCollections() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom align="center">
        POPULAR COLLECTIONS
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} height={isMobile ? "100vw" : "25vw"}>
          <Item>
            <Card
              style={{ height: "100%", width: "100%", backgroundColor: "red" }}
            >
              <div style={{ height: "100%", width: "100%" }}>
                <Card
                  style={{
                    height: "100%",
                    width: "100%",
                    top: 0,
                  }}
                >
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
                      image="http://www.adlittle.com/sites/default/files/events/corporate_startup_visual-min.jpg"
                    />
                    <Box
                      style={{
                        position: "absolute",
                        color: "white",
                        bottom: "2%",
                        left: "13%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Typography variant="h4">RIGS & RACKS</Typography>
                    </Box>
                  </div>
                </Card>
              </div>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Card
              style={{ height: "100%", width: "100%", backgroundColor: "red" }}
            >
              <div style={{ height: "100%", width: "100%" }}>
                <Card
                  style={{
                    height: "100%",
                    width: "100%",
                    top: 0,
                  }}
                >
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
                      image="https://149718753.v2.pressablecdn.com/wp-content/uploads/2022/02/Exercise-Bikes-Indoor-Cycling-Equipment-Montreal-1024x768.jpg"
                    />
                    <Box
                      style={{
                        position: "absolute",
                        color: "white",
                        bottom: "2%",
                        left: "22%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Typography variant="h4">HOME GYM</Typography>
                    </Box>
                  </div>
                </Card>
              </div>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Card
              style={{ height: "100%", width: "100%", backgroundColor: "red" }}
            >
              <div style={{ height: "100%", width: "100%" }}>
                <Card
                  style={{
                    height: "100%",
                    width: "100%",
                    top: 0,
                  }}
                >
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
                      image="https://media.istockphoto.com/photos/brutal-caucasian-bodybuilder-training-chest-in-gym-picture-id876233812?k=20&m=876233812&s=612x612&w=0&h=31CrF8d1WRXxqkto-IemcHC94RcIIpTI7bNAGK5s7bQ="
                    />
                    <Box
                      style={{
                        position: "absolute",
                        color: "white",
                        bottom: "2%",
                        left: "16%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Typography variant="h4">PLATES</Typography>
                    </Box>
                  </div>
                </Card>
              </div>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Card
              style={{ height: "100%", width: "100%", backgroundColor: "red" }}
            >
              <div style={{ height: "100%", width: "100%" }}>
                <Card
                  style={{
                    height: "100%",
                    width: "100%",
                    top: 0,
                  }}
                >
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
                      image="https://www.elitefts.com/wp/wp-content/uploads/2012/05/the-vault-cover-blank.jpg"
                    />
                    <Box
                      style={{
                        position: "absolute",
                        color: "white",
                        bottom: "2%",
                        left: "33%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Typography variant="h4">WEIGHT BENCHES</Typography>
                    </Box>
                  </div>
                </Card>
              </div>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Card
              style={{ height: "100%", width: "100%", backgroundColor: "red" }}
            >
              <div style={{ height: "100%", width: "100%" }}>
                <Card
                  style={{
                    height: "100%",
                    width: "100%",
                    top: 0,
                  }}
                >
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
                      image="http://cdn.shopify.com/s/files/1/0280/9102/3454/files/Gym_51_mobile_banner_grande.jpg?v=160172635"
                    />
                    <Box
                      style={{
                        position: "absolute",
                        color: "white",
                        bottom: "2%",
                        left: "21%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Typography variant="h4">BARBELLS</Typography>
                    </Box>
                  </div>
                </Card>
              </div>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} height={isMobile ? "100vw" : "25vw"}>
          {/* <img
              src="https://media.istockphoto.com/photos/caucasian-muscular-man-kneeling-and-clapping-hands-in-front-of-him-picture-id1126509424?k=20&m=1126509424&s=612x612&w=0&h=45MCjJAyNlQJqxEN4Kv9UVMd4VeVt-S7EjbvVC4WoCQ="
              alt="https://media.istockphoto.com/photos/caucasian-muscular-man-kneeling-and-clapping-hands-in-front-of-him-picture-id1126509424?k=20&m=1126509424&s=612x612&w=0&h=45MCjJAyNlQJqxEN4Kv9UVMd4VeVt-S7EjbvVC4WoCQ="
            /> */}

          <Item>
            <Card
              style={{ height: "100%", width: "100%", backgroundColor: "red" }}
            >
              <div style={{ height: "100%", width: "100%" }}>
                <Card
                  style={{
                    height: "100%",
                    width: "100%",
                    top: 0,
                  }}
                >
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
                      image="https://media.istockphoto.com/photos/caucasian-muscular-man-kneeling-and-clapping-hands-in-front-of-him-picture-id1126509424?k=20&m=1126509424&s=612x612&w=0&h=45MCjJAyNlQJqxEN4Kv9UVMd4VeVt-S7EjbvVC4WoCQ="
                    />
                    <Box
                      style={{
                        position: "absolute",
                        color: "white",
                        bottom: "2%",
                        left: "25%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Typography variant="h4">
                        GYMNASTICS & BODYWEIGHT
                      </Typography>
                    </Box>
                  </div>
                </Card>
              </div>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
