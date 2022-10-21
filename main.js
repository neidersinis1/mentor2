const markAll = document.querySelector(".todos-leidos");
let point = document.querySelectorAll(".punto");

let etiquet1 = document.querySelector("#e1");
let chate1 = document.querySelector(".chat");
let point1 = document.querySelector(".punto");

let name11 = document.querySelector("#n1");
let chatn1 = document.querySelector(".chat");

let etiquet2 = document.querySelector("#e2");
let chate2 = document.querySelectorAll(".chat")[1];
let point2 = document.querySelectorAll(".punto")[1];

let name12 = document.querySelector("#n2");
let chatn2 = document.querySelector(".chat ")[1];

let etiquet3 = document.querySelector("#e3");
let chate3 = document.querySelectorAll(".chat")[2];
let point3 = document.querySelectorAll(".punto")[2];

let name13 = document.querySelector("#n3");
let chatn3 = document.querySelector(".chat ")[2];

let notification = document.querySelectorAll(".punto").length * 1;
// localStorage.setItem("valorEnLS", notification);

let notiNumber = document.querySelector(".noti-number");
if (notification == "0") {
  notiNumber.classList.add("inactive");
} else {
}

notiNumber.innerHTML = `${notification}`;

if (notification.length == 0) {
  notiNumber.setAttribute("class", "inactive");
} else {
}

// console.log(notiNumber);

let name1 = document.querySelectorAll(".name1");

let chat = document.querySelectorAll(".chat");

let mensaje1 = document.querySelectorAll(".mensaje1");

name11.addEventListener("click", () => {
  let notification = document.querySelectorAll(".punto").length - 1 * 0.99;
  Math.floor(notification);
  localStorage.setItem("valorEnLS", notification);
});

name11.addEventListener("click", () => {
  let notification = localStorage.getItem("valorEnLS");
  document.querySelector(".noti-number").innerHTML = notification;
  // notiNumber.innerHTML = `${notification}`;
});

name11.addEventListener("click", () => {
  localStorage.removeItem("valorEnLS");
});

name12.addEventListener("click", () => {
  let notification = document.querySelectorAll(".punto").length - 1 * 0.99;

  localStorage.setItem("valorEnLS", notification);
  // console.log(notification);
});
name12.addEventListener("click", () => {
  let notification = localStorage.getItem("valorEnLS");
  document.querySelector(".noti-number").innerHTML = notification;
  // notiNumber.innerHTML = +`${notification}`;
});

name12.addEventListener("click", () => {
  localStorage.removeItem("valorEnLS");
});

name13.addEventListener("click", () => {
  let notification = document.querySelectorAll(".punto").length - 1 * 0.99;

  localStorage.setItem("valorEnLS", notification);
  // console.log(notification);
});
name13.addEventListener("click", () => {
  let notification = localStorage.getItem("valorEnLS");
  document.querySelector(".noti-number").innerHTML = notification;
  // notiNumber.innerHTML = notification;
});

name13.addEventListener("click", () => {
  localStorage.removeItem("valorEnLS");
});

markAll.addEventListener("click", markAllRead);
etiquet1.addEventListener("click", marketiquet1);
name11.addEventListener("click", markName11);

etiquet2.addEventListener("click", marketiquet2);
name12.addEventListener("click", markName12);

etiquet3.addEventListener("click", marketiquet3);
name13.addEventListener("click", markName13);

function markAllRead() {
  notiNumber.classList.add("inactive");

  for (let i = 0; i < name1.length; i++) {
    name1[i].setAttribute("class", "name");
  }

  for (let i = 0; i < chat.length; i++) {
    chat[i].setAttribute("class", "chat1");
  }

  for (let i = 0; i < mensaje1.length; i++) {
    mensaje1[i].setAttribute("class", "mensaje");
  }

  for (let i = 0; i < point.length; i++) {
    point[i].setAttribute("class", "inactive");
  }
}

function marketiquet1() {
  point1.classList.replace("punto", "inactive");
  chate1.classList.replace("chat", "chat1");
  // for (let i = 0; i < chate1.length; i++) {
  //   chate1[i].setAttribute("class", "chat1");
  // }
}

function markName11() {
  point1.classList.replace("punto", "inactive");
  chate1.classList.replace("chat", "chat1");
}

function marketiquet2() {
  // for (let i = 0; i < point2.length; i++) {
  //   point2[i].setAttribute("class", "inactive");
  // }
  // point2.setAttribute("class", "inactive");
  // point2.classList.add("inactive");
  // chate2.classList.replace("chat", "chat1");
}

function markName12() {
  point2.classList.replace("punto", "inactive");
  chate2.classList.replace("chat", "chat1");
}

function marketiquet3() {
  // for (let i = 0; i < point2.length; i++) {
  //   point2[i].setAttribute("class", "inactive");
  // }
  // point2.setAttribute("class", "inactive");
  // point2.classList.add("inactive");
  // chate2.classList.replace("chat", "chat1");
}

function markName13() {
  point3.classList.replace("punto", "inactive");
  chate3.classList.replace("chat", "chat1");
}
