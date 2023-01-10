const greetingBanner = document.getElementById("welcome-banner");


greetingBanner.addEventListener('click', () => {
    console.log('clicked!');
    let greeting = document.getElementsByTagName('h2')[0];
    greeting.textContent = 'Have a good Time!';
});