const gap = 16;
const productGallery = document.getElementById("pr-gal-sucres")

const next = document.getElementById("right-arrow-prod");
const prev = document.getElementById("left-arrow-prod");

let width = productGallery.childNodes[1].offsetWidth;
window.addEventListener("resize", () => (width = productGallery.childNodes[1].offsetWidth));

console.log(productGallery.offsetWidth);
next.addEventListener("click", () => {
    productGallery.scrollBy(width + gap, 0);
});
prev.addEventListener("click", () => {
    productGallery.scrollBy(-(width + gap), 0);

});

