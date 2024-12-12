const darkmode = document.querySelector(".darkmode");
// Select toggle button and navigation menu
const menuToggle = document.querySelector('.menutoggle');
const navMenu = document.querySelector('.nav');

// Add event listener to the toggle button
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('displaymenu'); // Toggle the 'displaymenu' class
});

darkmode.addEventListener('click', ()=>{
    document.body.classList.toggle('darkmode');
})