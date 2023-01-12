//responsive header menu
let toggleBox = document.querySelector('.toggleBox');
let hamburger = document.querySelector('i.hamburger');
let xmark = document.querySelector('i.xmark');
let menu = document.querySelector('ul.menu');
    
toggleBox.addEventListener('click', () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("hide");
    xmark.classList.toggle("show");
});

//add columns with button
let addColumns = document.querySelector('#btn-addColumns');
let newColumns = document.querySelector('.columns-addColumns');

addColumns.addEventListener('click', () => {
    console.log('click');
    newColumns.classList.add("show");
});

//greeting banner
const greetingBanner = document.getElementById("welcome-banner");

greetingBanner.addEventListener('click', () => {
    console.log('clicked!');
    let greeting = document.getElementsByTagName('h2')[0];
    greeting.textContent = 'Have a good Time!';
});