const colors = [
  // "#1A2DB9",
  // "#0E50B9",
  // "#1d419c",
  // "#0D32B8",
  // "#1A2DB9",
  // "#6390F1",
  // "#0032E8",
  // "#8EB7F8",

  // "#0E129A",
  // "#0B1190",
  // "#1143E7",
  // "#93F3F8",
  // "#3A6CBB",
  // "#2B2BF7",
  // "#0B4B86",
  // "#A6CBE5",

  "#0000ff",
  "#0000e5",
  "#0000cc",
  "#0000b2",
  "#000099",
  "#00007f",
  "#000066",
  "#00004c",

  "#1919ff",
  "#3232ff",
  "#4c4cff",
  "#6666ff",
  "#7f7fff",
  "#9999ff",
  "#b2b2ff",
  "#e5e5ff",
  "#ffffff",
];

document.querySelectorAll(".block").forEach((block) => {
  block.addEventListener("mouseover", function () {
    var randomColor = Math.floor(Math.random() * colors.length);
    block.style.backgroundColor = colors[randomColor];
    // block.style.borderRadius = "50%"[randomColor];
  });
});
