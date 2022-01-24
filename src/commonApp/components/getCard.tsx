import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

import { MyContext } from "core/myContext";
import { PictureInfo } from "pods/cats/api/api.model";

interface Props {
  pet: PictureInfo;
}

const cartUseStyles = makeStyles(() => ({
  root: {
    width: 345,
    margin: "12px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cart: {
    display: "flex",
    flexDirection: "column",
    width: 100,
    height: 100,
    margin: "6px",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export const GetCard = (props: Props) => {
  const { pet } = props;
  const [state, setState] = React.useState(pet);
  const { cartList, setCartList } = React.useContext(MyContext);
  const classes = cartUseStyles();

  const handleClick = () => {
    setState({ ...state, selected: !state.selected });
    setCartList([...cartList, pet]);
  };
  return (
    <Card className={classes.root}>
      <div className={classes.title}>
        <CardHeader title={pet.title} />
        <input
          type="checkbox"
          checked={state.selected}
          onChange={handleClick}
        />
        <span>Buy</span>
      </div>
      <CardMedia
        className={classes.media}
        image={pet.picUrl}
        title={pet.title}
      />
    </Card>
  );
};
