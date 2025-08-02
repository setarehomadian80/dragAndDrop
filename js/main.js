const phone = document.querySelector("#phoneContainer");
const circle = document.querySelectorAll(".colorBox > div");
const phoneBg = document.querySelector("#phone-bg")
let dragedColor = null;

circle.forEach((item) => {
    item.setAttribute("draggable", true)

    const bgColor = getComputedStyle(item).backgroundColor;
    // item.addEventListener("dragstart", (e) => {
    // const bgColor = getComputedStyle(item).backgroundColor;
    //     dragedColor = bgColor
    // })
    item.addEventListener("dragstart", () => dragedColor = bgColor)
});
phone.addEventListener("dragover", e => e.preventDefault())

phone.addEventListener("drop", (e) => {
    e.preventDefault()
    // if (dragedColor) {
    //     phoneBg.setAttribute("fill", dragedColor)
    // }
    dragedColor ? phoneBg.setAttribute("fill", dragedColor) : undefined
})
