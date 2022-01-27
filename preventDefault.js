
// // menggunakan DOM EVENT handling
// const container =document.querySelector('.card');
// const x = document.querySelector('.close');

// x.addEventListener('click',function(){
//     container.style.display ='none';
// });

// // menggunakan DOM TRAVERSAL
// // MENGGUNAKAN PERULANGAN FOR

// const close = document.querySelectorAll('.close');
// // const card= document.querySelectorAll('.card');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click',function(el){
//         // alert('ini tombol ke '+ (i+1) +' ok')
//         el.parentElement.style.display ='none';
//     });
    
// };

// //// MENGGUNAKAN PERULANGAN FOR EACH
// // menggunakan PREVENT DEFAULT / Menghilangkan Aksi DEFAULT bawaan

// close.forEach(function(el){
//     el.addEventListener('click',function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         // EventBubling, Menghentikan Gelembung
//         e.stopPropagation();
//     });
    
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('okeh');
//     });
// });





// // contoh DOM TRAVERSAL
//  const nama = document.querySelector('.nama');
//  console.log(nama.nextElementSibling.nextElementSibling);




// // EVENT BUBLING


const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault()
    }
});