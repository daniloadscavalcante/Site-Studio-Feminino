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

const btnbackTop = document.querySelector('.backtop');



document.addEventListener("scroll", hiddenBtnTop); // colocando evento no documento
function hiddenBtnTop(){
    if(window.scrollY > 300){//scroolY retorna a possição que voce esta na vertical
        btnbackTop.style.display = "flex";
    }else{
        btnbackTop.style.display = "none";
    }
}
hiddenBtnTop()

function back_toTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  
}
      