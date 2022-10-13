const markAll = document.querySelector(".todos-leidos");
let point = document.querySelector(".punto");

// const markEtiquet = document.querySelector(".todos-leidos");
let etiquet = document.querySelector(".etiqueta");

const markNames = document.querySelector(".todos-leidos");
let names = document.querySelector(".name");

markAll.addEventListener("click", markAllRead);
// markEtiquet.addEventListener("click", markEtiqueta);

function markAllRead() {
  point.classList.add("inactive");
  etiquet = etiquet.classList.replace("etiqueta", "etiquet");
  names = names.classList.replace("name", "name1");
}

// function markEtiqueta() {
//   etiquet = etiquet.classList.replace("etiqueta", "etiquet");
// }
