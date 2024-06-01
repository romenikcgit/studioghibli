document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.imagens img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeBtn = document.getElementById('closeBtn');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImage.src = img.src;
            lightboxImage.classList.add('show'); // Adiciona a classe para exibir a imagem
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImage.classList.remove('show'); // Remove a classe para esconder a imagem
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImage && e.target !== closeBtn) {
            lightbox.style.display = 'none';
            lightboxImage.classList.remove('show'); // Remove a classe para esconder a imagem
        }
    });
});