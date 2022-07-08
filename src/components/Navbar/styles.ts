import { makeStyles, alpha } from "@material-ui/core";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    width: "100vw",
    
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    width: "50%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  grow: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    width: "130px",
    height: "auto",
    marginRight: "10px",
  },
  hide__if__sm: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  login: {
    color: "#4d4d4d",
  },

  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    maxWidth: "300px;",
  },
}));
