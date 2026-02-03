let mouse = document.querySelector('h1');

mouse.addEventListener("mousemove", function (move) {
  mouse.style.setProperty("--y", move.offsetY + "px");
  mouse.style.setProperty("--x", move.offsetX + "px");
});