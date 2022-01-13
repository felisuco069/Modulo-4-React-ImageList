import React from "react";
import { Link, generatePath } from "react-router-dom";
import { getDogLis } from "./api";

interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
}

export const ListPage: React.FC = () => {
  const [dogList, setDogList] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    getDogLis().then((json) => setDogList(json));
  }, []);

  return (
    <>
      <h2>Hello from Dog Shopping Cart</h2>

      {dogList.map((dog) => {
        return (
          <div key={dog.id}>
            <img src={dog.picUrl} alt="Image not found" />
            <span>{dog.title}</span>
          </div>
        );
      })}
    </>
  );
};
