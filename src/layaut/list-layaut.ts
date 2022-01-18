import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const listUseStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: "flex",
      flexWrap: "wrap",
    },
    navigation: {
      listStyle: "none",
    },
  })
);
