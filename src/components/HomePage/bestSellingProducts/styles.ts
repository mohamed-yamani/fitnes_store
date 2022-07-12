import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: "30px",
  },
  swiper: {
    overflow: "hidden",
    marginTop: "30px",
    right: "8px",
    position: "relative",
  },
  image: {
    width: "10px",
    height: "10px",
    ratio: 2,
    objectFit: "cover",
  },
  card: {
    width: "290px",
    height: "290px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "green",
  },
}));
