import { PictureInfo } from "pods/dogs/api/api.model";

export interface Context {
  cartList: PictureInfo[];
  setCartList: (value: PictureInfo[]) => void;
}
