"use strict";

import galleryItems from "./gallery-items.js";

let previewIMG = galleryItems.map(a => a.preview);
let originIMG = galleryItems.map(a => a.original);
// let altIMG = galleryItems.map(a => a.description);

let ul = document.querySelector(".js-gallery");
let full = document.createElement("div");
let small = document.createElement("li");
let bi = document.createElement("img");

ul.prepend(full);
small.prepend(small);
full.prepend(bi);

full.classList.add("fullview");
small.classList.add("preview");

small.innerHTML = `<li><a><img src=${previewIMG[0]} alt=${altIMG[0]}></a></li>
<li><a><img src=${previewIMG[1]} alt=${altIMG[1]}></a></li>
<li><a><img src=${previewIMG[2]} alt=${altIMG[2]}></a></li>
<li><a><img src=${previewIMG[3]} alt=${altIMG[3]}></a></li>
<li><a><img src=${previewIMG[4]} alt=${altIMG[4]}></a></li>
<li><a><img src=${previewIMG[5]} alt=${altIMG[5]}></a></li>
<li><a><img src=${previewIMG[6]} alt=${altIMG[6]}></a></li>
<li><a><img src=${previewIMG[7]} alt=${altIMG[7]}></a></li>
<li><a><img src=${previewIMG[8]} alt=${altIMG[8]}></a></li>`;

full.innerHTML = `<img src=${originIMG[0]}>`;

function choose(event) {
  if (event.target.nodeName === "IMG") {
    full.innerHTML = `<img src=${event.target.alt}`;
  }
}

div.addEventListener("click", choose);
