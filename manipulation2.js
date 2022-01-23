// // dom Manipulation 2
//  // buat element dan isi baru
const pbaru = document.createElement("p");
const pisi = document.createTextNode("paragraf baru");

// // simpan tulisan ke dalam paragraf appenedChild
pbaru.appendChild(pisi);

// //simpan di akhir section a menggunakan appenedChild
// // kegunaan appnend child adalah menyimpan di akhir parent element
const secA = document.getElementById("a");
secA.appendChild(pbaru);

// // menggunakan insert before
const libaru = document.createElement("li");
const isili = document.createTextNode("di buat dengan js");

libaru.appendChild(isili);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(libaru, li2);

// // remove

const link = document.getElementsByTagName("a")[0];

secA.removeChild(link);

// // replace child

const secB = document.getElementById("b");
const p4 = secB.querySelector("p");

const elB = document.createElement("h2");
const isi = document.createTextNode("di baut dengan js");

elB.appendChild(isi);

secB.replaceChild(elB, p4);

// // selesai manipulasi
