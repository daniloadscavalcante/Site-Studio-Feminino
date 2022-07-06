var menulinks = document.querySelectorAll('.menu a[href^="#"]');
var menu = document.querySelector('.menu');


menulinks.forEach(link => {
    link.addEventListener('click', hideMenu);   
});

function hideMenu(){
   menu.style.right = '-100vh';
    
}



