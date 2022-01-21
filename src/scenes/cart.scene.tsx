import React from "react";
import { MyContext } from "core/myContext";
import { makeStyles } from "@material-ui/core/styles";

const carttUseStyles = makeStyles(() => ({
  cartList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const CartList = () => {
  const { cartList, setCartList } = React.useContext(MyContext);

  const classes = carttUseStyles();

  return (
    <div className={classes.cartList}>
      <h1>Hello from Cart</h1>
    </div>
  );
};
