import React from "react";
import { getDogList } from "pods/dogs/api/api";

import { PictureInfo } from "pods/dogs/api/api.model";
import { PetsListComponent } from "commonApp/components/pet.list.component";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "core/myContext";

const PetContainerStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export const DogListContainer: React.FC = (props) => {
  const { dogList, setDogList } = React.useContext(MyContext);
  const classes = PetContainerStyle();

  React.useEffect(() => {
    getDogList().then((json) => {
      setDogList(json);
    });
  }, []);

  return (
    <div className={classes.container}>
      <PetsListComponent petList={dogList} />
    </div>
  );
};
