
const next = document.getElementById("right-arrow-prod");
const prev = document.getElementById("left-arrow-prod");
const sucres_tab = document.getElementById("sucres_tab");
const sales_tab = document.getElementById("sales_tab");
const tablettes_tab = document.getElementById("tablettes_tab");
const vinaigres_tab = document.getElementById("vinaigres_tab");

const pr_gal_sucres = document.getElementById("pr-gal-sucres");
const pr_gal_sales = document.getElementById("pr-gal-sales");
const pr_gal_tablettes = document.getElementById("pr-gal-tablettes");
const pr_gal_vinaigres = document.getElementById("pr-gal-vinaigres");

const tab_gallery_pairs = {
    "sucres_tab": pr_gal_sucres,
    "sales_tab": pr_gal_sales,
    "tablettes_tab": pr_gal_tablettes,
    "vinaigres_tab": pr_gal_vinaigres
}

let curr_product_gallery = document.getElementById("pr-gal-sucres");

sucres_tab.addEventListener("click", () => {
    switchTabs(sucres_tab);
})
sales_tab.addEventListener("click", () => {
    switchTabs(sales_tab);
})
tablettes_tab.addEventListener("click", () => {
    switchTabs(tablettes_tab);
})
vinaigres_tab.addEventListener("click", () => {
    switchTabs(vinaigres_tab);
})
let gap = Number(getComputedStyle(curr_product_gallery).gap.slice(0, -2));


let width = curr_product_gallery.offsetWidth;
window.addEventListener("resize", () => {
    width = curr_product_gallery.offsetWidth
    gap = Number(getComputedStyle(curr_product_gallery).gap.slice(0, -2));
    console.log(gap)
});

console.log(curr_product_gallery.offsetWidth);
next.addEventListener("click", () => {
    curr_product_gallery.scrollBy(width + gap, 0);
});
prev.addEventListener("click", () => {
    curr_product_gallery.scrollBy(-(width + gap), 0);

});

function switchTabs(tab) {
    // console.log(curr_product_gallery.id);
    // console.log(tab);
    // console.log(tab_gallery_pairs[tab.id].id);
    if (curr_product_gallery.id != tab_gallery_pairs[tab.id].id) {
        curr_product_gallery.classList.toggle("hidden");
        curr_product_gallery = tab_gallery_pairs[tab.id];
        curr_product_gallery.classList.toggle("hidden");
    }
}

