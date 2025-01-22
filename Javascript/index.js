//dark mode functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
//humburger functionality
//selecting the hamburger elemenent with the CSS selector
const hamburger = document.querySelector('.hamburger');
//selecting the navbar elemenent with the CSS selector
const navbar = document.querySelector('.navbar');

//adding a click event listener to the hamburger variable
hamburger.addEventListener('click', () => {
navbar.classList.toggle('open');
});
