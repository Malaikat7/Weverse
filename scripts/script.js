function DarkMode() { 
    // Toggle the dark mode class on the main section only
    document.querySelector("main").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
}

function ClickMediaButton(event) {
    event.preventDefault(); // Geen auto load on same page, code van chatGPT
    const clickSound = new Audio('audio/mouseclick.mp3'); 
    clickSound.play();
}

// home banner
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container > ul');
    const prevButton = document.querySelector('.carousel-container .prev');
    const nextButton = document.querySelector('.carousel-container .next');
    
    const scrollAmount = carousel.clientWidth; // Scroll containerwidth, code van chatGPT

    // hulp van chatGPT
    nextButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    prevButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});

// Media page banner slide, hulp van chatGPT
document.querySelector('.prev').addEventListener('click', function() {
    document.querySelector('.slides').scrollBy({
        left: -308, 
        behavior: 'smooth'
    });
});

document.querySelector('.next').addEventListener('click', function() {
    document.querySelector('.slides').scrollBy({
        left: 308, 
        behavior: 'smooth'
    });
});
