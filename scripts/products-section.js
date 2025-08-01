
const productGallery = document.getElementById("pr-gal-sucres");
let gap = Number(getComputedStyle(productGallery).gap.slice(0, -2));

const next = document.getElementById("right-arrow-prod");
const prev = document.getElementById("left-arrow-prod");

let width = productGallery.offsetWidth;
window.addEventListener("resize", () => {
    width = productGallery.offsetWidth
    gap = Number(getComputedStyle(productGallery).gap.slice(0, -2));
    console.log(gap)
});

console.log(productGallery.offsetWidth);
next.addEventListener("click", () => {
    productGallery.scrollBy(width + gap, 0);
});
prev.addEventListener("click", () => {
    productGallery.scrollBy(-(width + gap), 0);

});

