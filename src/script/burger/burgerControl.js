export const burgerControll = ({ selectorBtn, selectorNav }) => {
  const burger = document.querySelector(selectorBtn);
  const navigation = document.querySelector(selectorNav);

  burger.addEventListener("click", () => {
    console.log("click");
    navigation.classList.toggle("navigation_active");
  });
};
