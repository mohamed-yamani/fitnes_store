import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: 345,
    minWidth: 340,
  },
  media: {
    height: 0,
    paddingTop: "70.25%", // 16:9
    alignItems: "items-end",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
