// DOM SELECTION
// 1. document.getElementById

const judul = document.getElementById("judul");
judul.style.color = "green";
judul.style.textAlign = "center";
judul.style.backgroundColor = "#ddd";
judul.innerHTML = "SELAMAT DATANG";

// 2. getElementsByTageName ini Juga Mengembalikan nilai html collection

const p = document.getElementsByTagName("p");
p[0].style.backgroundColor = "#ddd";

// pengulangan
for (let i = 1; i < p.length; i++) {
  p[i].style.color = "red";
}

// 3.getElementByClass
// sama halnya dengan getElementsByTageName ELEMENT ini Juga Mengembalikan nilai html collection

const c = document.getElementsByClassName("p1");
c[0].innerHTML = "Di Ubah JS";
c[0].style.color = "green";
c[0].style.textAlign = "center";

// query Selector
// menghasilkan element

const p4 = document.querySelector("#b p");
p4.style.textAlign = "center";
p4.style.backgroundColor = "green";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// query selector all
// menghasilkan NodeList
const all = document.querySelectorAll("p");
for (let i = 0; i < all.length; i++) {
  all[i].style.color = "red";
}

// mengubah node root
// mengubah scope dari nood root

const sectionb = document.getElementById("b");
const p44 = sectionb.querySelector("p");
p44.innerHTML = "selamat datang";
