import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const listUseStyles = makeStyles(() => ({
  navigation: {
    listStyle: "none",
  },
}));

export const HeaderPage = () => {
  const classes = listUseStyles();

  return (
    <nav>
      <ul className={classes.navigation}>
        <li>
          <Link to={"/dogs"}>Buy Dogs</Link>
        </li>
        <li>
          <Link to={"/cats"}>Buy Cats</Link>
        </li>
      </ul>
    </nav>
  );
};
