import React from "react";
import { Context, PictureInfo } from "models/models";

export const MyContext = React.createContext<Context>({
  cartList: [],
  setCartList: (value) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [cartList, setCartList] = React.useState<PictureInfo[]>();

  return (
    <MyContext.Provider
      value={{
        cartList,
        setCartList,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
