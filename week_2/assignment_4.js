//responsive header menu
const toggleBox = document.querySelector('.toggleBox');
const hamburger = document.querySelector('i.hamburger');
const xmark = document.querySelector('i.xmark');
const menu = document.querySelector('ul.menu');
    
toggleBox.addEventListener('click', () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("hide");
    xmark.classList.toggle("show");
});

//add columns with button
const addColumns = document.querySelector('#btn-addColumns');
const newColumns = document.querySelector('.columns-addColumns');

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