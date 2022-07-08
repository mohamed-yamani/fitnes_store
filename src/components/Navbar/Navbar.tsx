import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import React from "react";

import logo from "../../assets/pngs/logo.png";
import useStyles from "./styles";
import {
  Search,
  ShoppingCart,
  Person,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

const Navbar = () => {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        className={classes.appBar}
        elevation={0}
        color="inherit"
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">
            <img
              src={logo}
              alt="logo"
              height="25px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase
              placeholder="Search…"
              aria-setsize={100}
              className={classes.input}
            />
          </div>
          <div className={classes.menu}>
            <Typography variant="h6" className={classes.hide__if__sm}>
              MORE
            </Typography>
            <IconButton area-label="user" color="inherit">
              <Person />
            </IconButton>
            <Typography variant="body1" className={classes.hide__if__sm}>
              LOGIN
            </Typography>
            <IconButton
              area-label="user"
              color="inherit"
              className={classes.hide__if__sm}
            >
              <FavoriteBorderOutlined />
            </IconButton>
            <IconButton area-label="Show cart items" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default Navbar;
