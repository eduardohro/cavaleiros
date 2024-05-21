const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    menuToggle.classList.toggle('nav-active');
});

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.element.transition');
    elements.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('show')) {
            element.classList.add('show');
        }
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.element.transition');
    elements.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('show')) {
            element.classList.add('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const backgroundImages = document.getElementById('background-images');
    const images = backgroundImages.getElementsByClassName('background-image');
    let totalImages = images.length;
    let currentImageIndex = 0;
    let interval = 3000; 

    function showNextImage() {
        
        images[currentImageIndex].classList.remove('show');
        
        
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        
        
        images[currentImageIndex].classList.add('show');
        
        
        progressBar.style.width = '0';
        progressBar.style.animation = 'none'; 
        void progressBar.offsetWidth; 
        progressBar.style.animation = `fillProgressBar ${interval / 1000}s linear forwards`; 
        progressBar.style.width = '100%'; 
    }

    setInterval(showNextImage, interval);
    
    
    progressBar.style.animation = `fillProgressBar ${interval / 1000}s linear forwards`;
    progressBar.style.width = '100%';
});
