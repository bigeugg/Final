
document.querySelector("img").addEventListener ("mouseover", mouseOver);
document.querySelector("img").addEventListener ("mouseout", mouseOut);

function mouseOver() {
    document.querySelector("img").style.opacity = "1";
}

function mouseOut() {
    document.querySelector("img").style.opacity = "0.5";
}


let albums = [
    {name: "Album 1", price: 12.99, addedToCart: false},
    {name: "Album 2", price: 14.99, addedToCart: false},
    {name: "Album 3", price: 9.99, addedToCart: false},
    {name: "Album 4", price: 19.99, addedToCart: false}
]

