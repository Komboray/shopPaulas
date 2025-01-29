//we are making the navbar on the phone to be responisve
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
///code that makes the bar on the right move[open] etc..coupled with the css code mobile 

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}
