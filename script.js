const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsArea = document.querySelector(".buttons");

function moveNoButton() {
    const areaWidth = buttonsArea.clientWidth;
    const areaHeight = buttonsArea.clientHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = areaWidth - btnWidth;
    const maxY = areaHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// PC – myš
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobil – dotyk
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // zabráni kliknutiu
    moveNoButton();
});

// Áno
yesBtn.addEventListener("click", () => {
    document.querySelector("h1").innerText = "Yay! 💖🥰";
});
