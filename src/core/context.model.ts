export interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
}

export interface Context {
  cartList: PictureInfo[];
  setCartList: (value: PictureInfo[]) => void;
  dogList: PictureInfo[];
  setDogList: (value: PictureInfo[]) => void;
  catList: PictureInfo[];
  setCatList: (value: PictureInfo[]) => void;
}
