import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { PictureInfo } from "../../models/models";
import { cartUseStyles } from "../../layaut/cart-layaut.";

interface Props {
  pet: PictureInfo;
}
export const GetCard = (props: Props) => {
  const { pet } = props;
  const classes = cartUseStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.title}>
        <CardHeader title={pet.title} />
        <input type="checkbox" />
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
