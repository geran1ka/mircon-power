export const burgerControll = ({ selectorBtn, selectorNav }) => {
  const burger = document.querySelector(selectorBtn);
  const navigation = document.querySelector(selectorNav);
  const header = document.querySelector(".header");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    navigation.classList.toggle("navigation_active");
    header.classList.toggle("header_active");
  });
};
