"use strict";
const thumbs = document.getElementById("thumbs");
thumbs.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest("a");
    if (!link || !thumbs.contains(link)) return;
    const largeImage = document.getElementById("largeImg");
    largeImage.src = link.href;
    largeImage.alt = link.title;
});

//# sourceMappingURL=index.f75de5e1.js.map
