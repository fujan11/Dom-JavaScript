// // // menggunakan event handler

// const p3 = document.querySelector(".p3");

// function ubahWarna() {
//   p3.style.backgroundColor = "lightblue";
// }

// const p22 = document.querySelector(".p2");
// function ubahWarnap2() {
//   p22.style.backgroundColor = "lightblue";
// }

// p22.onclick = ubahWarnap2;

// // // add event listener

// function tambahUl() {
//   const ul = document.querySelector("section#b ul");
//   const li = ul.querySelector(".li");

//   const tul = document.createElement("li");
//   const tli = document.createTextNode("ini di tambah dengan js");

//   tul.appendChild(tli);

//   ul.appendChild(tul);
// }

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", tambahUl);

// // perbedaan event handler dan listener

// // event handler hanya menjalankan perintah yang terakir ketka ad 2 perintah atau lebih

const p3 = document.querySelector(".p3");

// p3.onclick = function () {
//   p3.style.backgroundColor = "blue";
// };
// p3.onclick = function () {
//   p3.style.color = "blue";
// };
// // hanya yang bawah yang jalan

// // Onclick listener dua2nya di jalankan

p3.addEventListener("mouseenter", function () {
  p3.style.backgroundColor = "blue";
});
p3.addEventListener("mouseleave", function () {
  p3.style.color = "black";
  alert("anda telah mengklik");
});
