import React from "react";
import { Context, PictureInfo } from "./context.model";

export const MyContext = React.createContext<Context>({
  cartList: [],
  setCartList: (value) => {},
  dogList: [],
  setDogList: (value) => {},
  catList: [],
  setCatList: (value) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [cartList, setCartList] = React.useState<PictureInfo[]>([]);
  const [dogList, setDogList] = React.useState<PictureInfo[]>([]);
  const [catList, setCatList] = React.useState<PictureInfo[]>([]);

  return (
    <MyContext.Provider
      value={{
        cartList,
        setCartList,
        dogList,
        setDogList,
        catList,
        setCatList,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
