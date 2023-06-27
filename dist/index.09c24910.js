const IMAGES = [
    new URL("./images/Asmodeus.png", impor),
    "http://192.168.1.91:8080/index.php/apps/files_sharing/ajax/publicpreview.php?x=854&y=421&a=true&file=Asmodeus.png&t=5OToSfxIzo3EBBv&scalingup=0",
    "http://192.168.1.91:8080/index.php/apps/files_sharing/ajax/publicpreview.php?x=854&y=421&a=true&file=Asmodeus.png&t=5OToSfxIzo3EBBv&scalingup=0"
];
let index = 0;
const main = document.querySelector("main");
const INTERVAL_TIME = 2500;
let interval = setInterval(slideBackground, INTERVAL_TIME);
window.addEventListener("focus", ()=>{
    interval = setInterval(slideBackground, INTERVAL_TIME);
});
window.addEventListener("blur", ()=>{
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

//# sourceMappingURL=index.09c24910.js.map
