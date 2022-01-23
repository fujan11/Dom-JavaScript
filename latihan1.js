const bt =document.getElementsByTagName('button')[0];
const h1 =document.getElementsByTagName('body')[0];

bt.addEventListener('click', function () {
    // h1.style.backgroundColor = "lightblue";
    // h1.setAttribute('class','biru-muda');
    h1.classList.toggle('biru-muda');

});

//  // mengubah warna secara random
const btbaru = document.createElement('button');
const isibt = document.createTextNode('Random Warna');

btbaru.appendChild(isibt);
bt.after(btbaru);

btbaru.addEventListener('click',function(){
    // // memperoleh angka random
    const r = Math.round(Math.random()*255 + 1);
    const g = Math.round(Math.random()*255 + 1);
    const b = Math.round(Math.random()*255 + 1);
    h1.style.backgroundColor ='rgb('+ r +','+ g +','+ b +')'
});
// // mengubah backround dengan Range

const red = document.querySelector('input[name=red]');
const green = document.querySelector('input[name=green]');
const blue = document.querySelector('input[name=blue]');

// 

red.addEventListener('input', function(){
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    h1.style.backgroundColor ='rgb('+ r+','+ g+','+b+')';
})
green.addEventListener('input', function(){
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    h1.style.backgroundColor ='rgb('+r+','+ g +','+b+')';
})
blue.addEventListener('input', function(){
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    h1.style.backgroundColor ='rgb('+r+','+ g +','+b+')';
})

// // mengubah warna menggunakan mouse

document.body.addEventListener('mousemove', function(event){
    // // mencari posisi mouse
    // console.log(event.clientX);
    // // ukuran browser
    // console.log(window.innerWidth);
    const xpos = Math.round((event.clientX / window.innerWidth)*255);
    const ypos = Math.round((event.clientY / window.innerHeight)*255);
    const bluee = Math.round(((event.clientY + event.clientX) / (window.innerHeight+window.innerWidth))*255);
     
    document.body.style.backgroundColor ='rgb('+xpos+','+ypos+','+bluee+')';
});