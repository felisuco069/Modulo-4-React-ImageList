import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { HeaderPage } from "commonApp/components/header.page";
import { CartList } from "scenes/cart.scene";

const appUseStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100vw",
  },
  main: {
    width: "60vw",
    borderRight: "3px solid black;",
    boxSizing: "border-box",
  },
  cart: {
    width: "40vw",
    boxSizing: "border-box",
  },
}));

export const AppLayaut = ({ children }) => {
  const classes = appUseStyles();

  return (
    <div className={classes.root}>
      <header>
        <HeaderPage />
      </header>
      <div className={classes.container}>
        <main className={classes.main}>{children}</main>
        <div className={classes.cart}>
          <CartList />
        </div>
      </div>
    </div>
  );
};
