import React from "react";

import { PetsListComponent } from "commonApp/components/pet.list.component";
import { PictureInfo } from "./api/api.model";
import { getCatList } from "./api/api";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "core/myContext";

const PetContainerStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export const CatListContainer: React.FC = () => {
  const { catList, setCatList } = React.useContext(MyContext);
  // const [catList, setCatList] = React.useState<PictureInfo[]>([]);
  const classes = PetContainerStyle();

  React.useEffect(() => {
    getCatList().then((json) => {
      setCatList(json);
    });
  }, []);

  return (
    <div className={classes.container}>
      <PetsListComponent petList={catList} />;
    </div>
  );
};
