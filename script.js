const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsArea = document.querySelector(".buttons");

noBtn.style.left = "60%";
noBtn.style.top = "50%";
noBtn.style.transform = "translate(-50%, -50%)";

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
    noBtn.style.transform = "none";
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
    document.querySelector("h1").innerText = "Vedel som že povieš ÁNO!! 💖🥰";

    // odstráni tlačidlo "Nie"
    noBtn.style.display = "none";

    // môžeš aj zmeniť text tlačidla Áno
    yesBtn.innerText = "Milujem ťa ❤️";
});
