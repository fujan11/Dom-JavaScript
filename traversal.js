
// // menggunakan DOM EVENT handling
// const container =document.querySelector('.card');
// const x = document.querySelector('.close');

// x.addEventListener('click',function(){
//     container.style.display ='none';
// });

// // menggunakan DOM TRAVERSAL
// // MENGGUNAKAN PERULANGAN FOR

const close = document.querySelectorAll('.close');
// // const card= document.querySelectorAll('.card');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click',function(el){
//         // alert('ini tombol ke '+ (i+1) +' ok')
//         el.parentElement.style.display ='none';
//     });
    
// };

// //// MENGGUNAKAN PERULANGAN FOR EACH

close.forEach(function(el){
    el.addEventListener('click',function(e){
        e.target.parentElement.style.display = 'none';
    });
    
});
// // contoh DOM TRAVERSAL
 const nama = document.querySelector('.nama');
 console.log(nama.nextElementSibling.nextElementSibling);