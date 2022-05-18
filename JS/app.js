let inputSearch = document.getElementById("inputSearch");
let form = document.getElementsByTagName("form")
var counter = 0

let navBottomMenu = document.getElementById('navBottomMenu');

let navButton = document.getElementById('navButton');

inputSearch.style.visibility = "hidden"
function displayInput(){
  
       if(inputSearch.style.visibility === "hidden"){
        inputSearch.style.visibility = "visible"
    }else{
        inputSearch.style.visibility = "hidden"
    }
  
  
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    //toggle nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')


        //Animate Links
    navLinks.forEach((links, index)=>{
       
        if(links.style.animation){
            links.style.animation = ''}
            else{
                links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`
            }
        

    });

    //Burger Animation
    burger.classList.toggle('toggle');
    
    })

    
}
navSlide();

// if(screen.width > 992){
//     navBottomMenu.style.display = 'block';
// }
// else{
//     navBottomMenu.style.display = 'none';
// }

// navButton.addEventListener('click',() =>{
//     navBottomMenu.style.display = 'block';
// })