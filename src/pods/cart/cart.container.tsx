import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { MyContext } from "core/myContext";
import { CartCardComponent } from "./cartCardComponent";
import { ResetButton } from "./reset.button";

const carttUseStyles = makeStyles(() => ({
  cartList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const CartListContainer = () => {
  const { petListurchased } = React.useContext(MyContext);

  const classes = carttUseStyles();

  return (
    <div className={classes.cartList}>
      <h1>Hello from Cart</h1>
      <ResetButton />
      <CartCardComponent petList={petListurchased} />
    </div>
  );
};
