import '../css/styles.css';
import '../css/home.css';
import '../css/responsive.css';
import '../img/s2i.png';

let title = document.getElementById('hackIt');
let read = document.getElementById('read');
let footer = document.querySelector('footer');

setTimeout(() => {
    title.classList.remove("fadeIn");
    title.classList.add("glitch");
    read.style.display = 'block';
}, 2800)


setTimeout(() => {  
    footer.style.visibility = 'visible';
    footer.style.animation = 'fadein 3s';
}, 1000);


title.addEventListener('click', ()=> {
    location.href = "./index.html";
})
