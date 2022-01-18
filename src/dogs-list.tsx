import React from "react";
import { getDogList } from "./api";
import { listUseStyles } from "./layaut/list-layaut";
import { GetCard } from "./common-app/components/getCard";
import { PictureInfo } from "./models/models";
import { Link } from "react-router-dom";

export const DogsPage: React.FC = () => {
  const [dogList, setDogList] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    getDogList().then((json) => {
      setDogList(json);
    });
  }, []);

  const classes = listUseStyles();

  return (
    <>
      <nav>
        <ul className={classes.navigation}>
          <li>
            <Link to={"/"}>Buy Dogs</Link>
          </li>
          <li>
            <Link to={"/cats"}>Buy Cats</Link>
          </li>
        </ul>
      </nav>
      <h2>Hello from Dog Shopping Cart</h2>
      <div className={classes.list}>
        {dogList.map((dog) => {
          return <GetCard pet={dog} key={dog.id} />;
        })}
      </div>
    </>
  );
};
function ListtUseStyles() {
  throw new Error("Function not implemented.");
}
