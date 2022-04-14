import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery')

const markupGallery = createGallery(galleryItems)

gallery.insertAdjacentHTML('beforeend', markupGallery);

function createGallery(pictures) {
    return pictures.map(({ preview, original, description }) => {
        return `<a class="gallery__item"
        href="${original}">
            <img class="gallery__image"
        src="${preview}"
        alt="${description}"/>
            </a>`
    }).join('');
}

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});