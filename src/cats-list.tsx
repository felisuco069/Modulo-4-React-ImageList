import React from "react";
import { getCatList } from "./api";
import { cartUseStyles } from "./layaut/cart-layaut.";
import { GetCard } from "./common-app/components/getCard";
import { PictureInfo } from "./models/models";
import { Link } from "react-router-dom";
import { listUseStyles } from "./layaut/list-layaut";

export const CatsPage: React.FC = () => {
  const [catList, setCatList] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    getCatList().then((json) => {
      setCatList(json);
    });
  }, []);

  const classes = cartUseStyles();
  const classes2 = listUseStyles();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Buy Dogs</Link>
          </li>
          <li>
            <Link to={"/cats"}>Buy Cats</Link>
          </li>
        </ul>
      </nav>
      <h2>Hello from Cat Shopping Cart</h2>
      <div className={classes2.list}>
        {catList.map((cat) => {
          return <GetCard pet={cat} key={cat.id} />;
        })}
      </div>
    </>
  );
};
