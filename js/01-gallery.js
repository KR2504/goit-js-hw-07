import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const markupGallery = createGallery(galleryItems)

gallery.insertAdjacentHTML('beforeend', markupGallery)
gallery.addEventListener('click', onGalleryItemClick);

function createGallery(pictures) {
    return pictures.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link"
        href="${original}" onclick="event.preventDefault()">
            <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
            </a>
            </div>`
    }).join('');
}

function onGalleryItemClick(event) {

    const originalUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${originalUrl}" width="800" height="600">`, {
        closable: true,
        onShow: (instance) => { window.addEventListener('keydown', onModalPressEsc) },
        onClose: (instance) => { window.removeEventListener('keydown', onModalPressEsc) },
    });

    instance.show();

    function onModalPressEsc(event) {

        if (event.code === 'Escape') {
            instance.close();
        }
    };
}