import React from "react";
import { MyContext } from "core/myContext";
import { makeStyles } from "@material-ui/core/styles";
import { PetsListComponent } from "commonApp/components/pet.list.component";

const carttUseStyles = makeStyles(() => ({
  cartList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const CartListContainer = () => {
  const { cartList } = React.useContext(MyContext);

  const classes = carttUseStyles();

  return (
    <div className={classes.cartList}>
      <PetsListComponent petList={cartList} />
    </div>
  );
};
