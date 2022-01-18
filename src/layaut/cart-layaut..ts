import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const cartUseStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 345,
      margin: "12px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    cart: {
      display: "flex",
      flexDirection: "column",
      width: 100,
      height: 100,
      margin: "6px",
    },
    title: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  })
);
