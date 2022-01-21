import React from "react";
import { GetCard } from "commonApp/components/getCard";
import { PictureInfo } from "pods/dogs/api/api.model";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  petList: PictureInfo[];
}
const PetContainerStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export const PetsListComponent: React.FC<Props> = (props) => {
  const { petList } = props;
  const classes = PetContainerStyle();

  return (
    <div className={classes.container}>
      {petList.map((pet) => {
        return <GetCard pet={pet} key={pet.id} />;
      })}
    </div>
  );
};
