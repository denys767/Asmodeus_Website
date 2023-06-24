const IMAGES = ["./images/Asmodeus.png", "./images/corpse_1.png", "./images/corpse_2.png"];
let index = 0;

const main = document.querySelector("main");

const INTERVAL_TIME = 2500;
let interval = setInterval(slideBackground, INTERVAL_TIME);

window.addEventListener("focus", () => {
    interval = setInterval(slideBackground, INTERVAL_TIME);
});
window.addEventListener("blur", () => {
    clearInterval(interval);
    interval = null;
});


function slideBackground() {
    index++;
    if (index <= IMAGES.length - 1) {
        main.style.opacity = 0;
        main.style.opacity = 1;
        main.style.backgroundImage = `url(${IMAGES[index]})`;

    } else {
        index = 0;
        main.style.backgroundImage = `url(${IMAGES[index]})`;
    }

}
//developed by goritpukan and Rediska555
slideBackground();