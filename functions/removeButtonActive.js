export default function removeActiveButton() {
  const buttons = document.querySelectorAll(".stdButton");
  buttons.forEach((button) => button.classList.remove("activeButton"));
}
