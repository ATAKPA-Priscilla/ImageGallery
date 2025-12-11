const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.prev');
const lightboxNext = document.querySelector('.next');
galleryItems.forEach(item => {item.addEventListener('click', openLightbox)});
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevImage);
lightboxNext.addEventListener('click', nextImage);
function closeLightbox(){
    lightbox.style.display = 'none';
    lightbox.style.visibility = 'hidden';
    lightbox.style.opacity = '0';
}
function openLightbox(event){
    lightbox.style.display = 'flex';
    lightbox.style.visibility = 'visible';
    lightbox.style.opacity = '1';
    const imageSrc =event.currentTarget.querySelector('img').src;
    lightboxImage.src = imageSrc;
    currentIndex = parseInt(event.currentTarget.getAttribute('data-index'));
}
let currentIndex = 0;
function nextImage(){
    currentIndex++;
    if (currentIndex >= galleryItems.length){
        currentIndex = 0;
    }
    updateLightboxImage(currentIndex);
}
function prevImage(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = galleryItems.length - 1;
    }
    updateLightboxImage(currentIndex);
}
function updateLightboxImage(currentIndex){
    const item =  galleryItems[currentIndex];
    const imageSrc = item.querySelector('img').src;
    lightboxImage.src = imageSrc;
}