let hamburger = document.querySelector('.hamburger');
let xmark = document.querySelector('.xmark');
let sideMenu = document.querySelector('.side-menu');
    
hamburger.addEventListener('click', () => {
    hamburger.classList.add("hide");
});



const greetingBanner = document.getElementById("welcome-banner");

greetingBanner.addEventListener('click', () => {
    console.log('clicked!');
    let greeting = document.getElementsByTagName('h2')[0];
    greeting.textContent = 'Have a good Time!';
});