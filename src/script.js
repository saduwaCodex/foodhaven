// const buttonIcon = document.getElementById("button-icon");
// const navbar = document.getElementById("navbar");
// const asideIcon = document.getElementById("asideIcon");
// const aside = document.querySelector(".aside");

// buttonIcon.addEventListener("click", () => {
//     console.log("click")
//     aside.classList.toggle("active"); 
// });

// asideIcon.addEventListener("click", () => {
//     console.log("click")
//     aside.classList.toggle("active"); 
// });

// Get DOM elements
const aside = document.getElementById('aside');
const buttonIcon = document.getElementById('button-icon');
const asideIcon = document.getElementById('asideIcon');
const overlayCover = document.getElementById('overlayCover');

// Function to open the aside menu
function openMenu() {
    aside.classList.add('active');
    overlayCover.classList.add('active');
}

// Function to close the aside menu
function closeMenu() {
    aside.classList.remove('active');
    overlayCover.classList.remove('active');
}

// Event listeners
buttonIcon.addEventListener('click', openMenu);
asideIcon.addEventListener('click', closeMenu);
overlayCover.addEventListener('click', closeMenu);

// Close immediately on scroll
window.addEventListener('scroll', () => {
    if (aside.classList.contains('active')) {
        closeMenu();
    }
});

// Optional: Close menu when clicking on nav links
const navLinks = document.querySelectorAll('.tags ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});