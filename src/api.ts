const url = `${process.env.API_BASE_URL}`;

export const getDogLis = () =>
  fetch(`${url}/dogsList`).then((response) => response.json());
