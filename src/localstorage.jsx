export const getDishes = () => {
  const info = localStorage.getItem("dishInfo");
  const parseInfo = JSON.parse(info);
  return parseInfo;
};
export const setDishesInfo = (dishInfo) => {
  const stringifyInfo = JSON.stringify(dishInfo);
  if (stringifyInfo) {
    localStorage.setItem("dishInfo", stringifyInfo);
  }
};
export const removeAdminInfo = () => {
  localStorage.removeItem("dishInfo");
};
