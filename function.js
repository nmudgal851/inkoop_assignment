// accessing the burger and navbar elements to open the navigation bar dynamically when user clicks on the hamburger menu.
const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');
// event listener for click event, when user clicks on the hamburger menu it will open and close the navigaion bar.
burger.addEventListener('click', () => {
    navbar.classList.toggle('navbar');
});