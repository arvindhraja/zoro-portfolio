/* ==========================
   SWORD CURSOR
========================== */

window.addEventListener("DOMContentLoaded", () => {

const swordCursor =
document.getElementById("swordCursor");

if(!swordCursor){
console.log("Sword cursor not found");
return;
}

document.addEventListener("mousemove", (e) => {

swordCursor.style.left =
e.clientX + "px";

swordCursor.style.top =
e.clientY + "px";

});

document.addEventListener("click", () => {

swordCursor.style.transform =
"translate(-50%,-50%) rotate(25deg)";

setTimeout(() => {

swordCursor.style.transform =
"translate(-50%,-50%) rotate(-45deg)";

},150);

});

});