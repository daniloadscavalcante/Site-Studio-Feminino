const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const section = document.querySelectorAll('[data-anime]');


const animateClass = 'animate';

function animeSection(){
let windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
section.forEach(function(element){
    if((windowTop)> element.offsetTop){
        element.classList.add(animateClass);
    }else{
        element.classList.remove(animateClass);
    }
    
})
}

animeSection();

if(section.length){
    window.addEventListener('scroll', debounce (function(){
        animeSection();
    }, 200));
}


/*botao backtop */

const btnTop = document.querySelector('.backtop');
 
btnTop.addEventListener('click', function(){
    window.scrollTo(0,0);
})

document.addEventListener("scroll", hiddenBtnTop); // colocando evento no documento
function hiddenBtnTop(){
    if(window.scrollY > 10){//scroolY retorna a possição que voce esta na vertical
        btnTop.style.display = "flex";
    }else{
        btnTop.style.display = "none";
    }
}
hiddenBtnTop()