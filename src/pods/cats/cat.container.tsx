import React from "react";

import { PetsListComponent } from "commonApp/components/pet.list.component";
import { PictureInfo } from "./api/api.model";
import { getCatList } from "./api/api";

export const CatListContainer: React.FC = () => {
  const [catList, setCatList] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    getCatList().then((json) => {
      setCatList(json);
    });
  }, []);

  return <PetsListComponent petList={catList} />;
};
