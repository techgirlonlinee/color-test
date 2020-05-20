const colors = ["#DDD89D", "#3a0da3", "#1d419c", "#e85e03"];

const blockTag = document.querySelector(".block");

const updateSection = function () {
  blockTag.style.backgroundColor = colors[colorNumber];
};

const random = function () {
  //   event.preventDefault();
  colorNumber = Math.floor(Math.random() * colors.length);
  updateSection();
};

document.querySelectorAll(".block").forEach((block) => {
  block.addEventListener("mouseover", random);
});
