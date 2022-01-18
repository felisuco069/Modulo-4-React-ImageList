const url = `${process.env.API_BASE_URL}`;

export const getDogList = () =>
  fetch(`${url}/dogsList`).then((response) => response.json());

export const getCatList = () =>
  fetch(`${url}/catsList`).then((response) => response.json());
