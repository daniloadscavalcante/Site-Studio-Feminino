var menulinks = document.querySelectorAll('.menu a[href^="#"]');
var menu = document.querySelector('.menu');
console.log(menulinks);

menulinks.forEach(link => {
    link.addEventListener('click', hideMenu);   
});

function hideMenu(){
   menu.style.right = '-100vh';
    
}



