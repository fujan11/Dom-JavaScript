function suitcomp() {
    const comp = Math.random();

        if (comp <= 0.34) return 'orang';
        if (comp>= 0.34 &&  comp< 0.67) return 'semut';
        return   'gajah';
        

        }

function rulehasil(comp,player) {
        if (player == comp) return'SERI.!';
        if( player == 'orang')return (comp=='gajah') ? 'KALAH' : 'MENANG';
        if(player == 'semut') return (comp=='gajah')? 'MENANG' : 'KALAH';
        if( player == 'gajah')return (comp == 'orang')? 'MENANG' : 'KALAH';
              
}

// // putar gambar

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah','orang','semut'];
    let i = 0;
    const waktuMulai= new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai >1000) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', 'img/'+gambar[i++]+'.png')
        if(i== gambar.length) i = 0;
    },100);
}

// // menggunakan perulangan
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pcomp = suitcomp();
            const pplayer = pil.className;
            const hasil = rulehasil(pcomp,pplayer);

            putar();

            setTimeout(function(){
                
                const img = document.querySelector('.img-komputer');
            img.setAttribute('src','img/' + pcomp +'.png')
            
            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            },1000);

            
    });
});




// // // menggunakan yang normal
// const pgajah=document.querySelector('.gajah');
// pgajah.addEventListener('click', function () {

//     const pcomp = suitcomp();
//     const pplayer = pgajah.className;
//     const hasil = rulehasil(pcomp,pplayer);

//     const img = document.querySelector('.img-komputer');
//     img.setAttribute('src','img/' + pcomp +'.png')
    
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
    
// });
// const porang=document.querySelector('.orang');
// porang.addEventListener('click', function () {
//     const pcomp = suitcomp();
//     const pplayer = porang.className;
//     const hasil = rulehasil(pcomp,pplayer);

//     const img = document.querySelector('.img-komputer');
//     img.setAttribute('src','img/' + pcomp +'.png')
    
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });
// const psemut=document.querySelector('.semut');
// psemut.addEventListener('click', function () {
//     const pcomp = suitcomp();
//     const pplayer = psemut.className;
//     const hasil = rulehasil(pcomp,pplayer);

//     const img = document.querySelector('.img-komputer');
//     img.setAttribute('src','img/' + pcomp +'.png')
    
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });