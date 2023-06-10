const menu = document.querySelector('.menu')
const linkItem2 = document.querySelector('.link-item2')
const fullYear = document.querySelector('#year')
const showText = document.querySelector('.show-text');
let homes = document.querySelector('.main-container')


const date = new Date().getFullYear();
fullYear.innerHTML = date;

window.addEventListener('scroll', topLinks);
menu.addEventListener("click", toggle);



function topLinks(){
  const scrollHeight = window.pageYOffset;
  const home = homes.getBoundingClientRect(). height;
  console.log(scrollHeight);
  if(scrollHeight > home){
    showText.classList.add("top-link2");
  }
  else {
    showText.classList.remove("top-link2");
  }
}
function toggle(){
    if(linkItem2.style.top == '-100%'){
    linkItem2.style.top = '0%';
    }
    else{
        linkItem2.style.top = '-100%';
    }
}


