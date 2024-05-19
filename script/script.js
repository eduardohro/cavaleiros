const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    menuToggle.classList.toggle('nav-active');
});

document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const backgroundImages = document.getElementById('background-images');
    const images = backgroundImages.getElementsByClassName('background-image');
    let totalImages = images.length;
    let currentImageIndex = 0;
    let interval = 3000; // Tempo em milissegundos

    function showNextImage() {
        // Esconde a imagem atual
        images[currentImageIndex].classList.remove('show');
        
        // Avança para a próxima imagem
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        
        // Mostra a próxima imagem
        images[currentImageIndex].classList.add('show');
        
        // Reinicia a animação da barra de progresso
        progressBar.style.width = '0';
        progressBar.style.animation = 'none'; // Remove a animação
        void progressBar.offsetWidth; // Força reflow
        progressBar.style.animation = `fillProgressBar ${interval / 1000}s linear forwards`; // Adiciona a animação novamente
        progressBar.style.width = '100%'; // Preenche a barra
    }

    setInterval(showNextImage, interval);
    
    // Inicia a animação da barra de progresso ao carregar a página
    progressBar.style.animation = `fillProgressBar ${interval / 1000}s linear forwards`;
    progressBar.style.width = '100%';
});
