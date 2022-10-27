const previewBtn = document.querySelector(".preview__button");
const closeBtn = document.querySelector(".social__button");
const social = document.querySelector(".social");
const socialIcon = document.querySelectorAll(".social__icon");

previewBtn.addEventListener("click", (e) => {
  openShare();
});
closeBtn.addEventListener("click", () => {
  closeShare();
});

socialIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    closeShare();
  });
});

function closeShare() {
  social.classList.remove("active");
}

function openShare() {
  social.classList.toggle("active");
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeShare();
  }
});

document.addEventListener("mouseup", (e) => {
  if (!social.contains(e.target)) {
    closeShare();
  }
});
