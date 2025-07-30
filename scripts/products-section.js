const gap = 32;
const productGallery = document.getElementById("pr-gal-sucres")

const next = document.getElementById("right-arrow-prod");
const prev = document.getElementById("left-arrow-prod");

let width = productGallery.offsetWidth;
window.addEventListener("resize", e => (width = productGallery.offsetWidth));


next.addEventListener("click", e => {
    productGallery.scrollBy(width + gap, 0);
});
prev.addEventListener("click", e => {
    productGallery.scrollBy(-(width + gap), 0);

});

