import React from "react";
import { getDogList } from "pods/dogs/api/api";

import { PictureInfo } from "pods/dogs/api/api.model";
import { PetsListComponent } from "commonApp/components/pet.list.component";

export const DogListContainer: React.FC = (props) => {
  const [dogList, setDogList] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    getDogList().then((json) => {
      setDogList(json);
    });
  }, []);

  return <PetsListComponent petList={dogList} />;
};
