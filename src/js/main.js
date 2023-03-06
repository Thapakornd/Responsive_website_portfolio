let menu = document.querySelector("#menu-click");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text',{delay:150, origin:'top'})
sr.reveal('.home-img',{delay:400, origin:'top'})

sr.reveal('.about, .services, .work, .contact-content', {delay:150, origin:'top'})