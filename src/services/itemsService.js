import { items } from "../mock/itemsMock";

export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
};

export const getItemsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.filter((item) => item.category === category));
    }, 2000);
  });
};
