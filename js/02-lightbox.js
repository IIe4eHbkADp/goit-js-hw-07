import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListTwo = document.querySelector('.gallery');
const createMarkupTwo = createImagesMarkup(galleryItems);
galleryListTwo.insertAdjacentHTML('beforeend', createMarkupTwo);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}" data-lightbox="lbox" onclick="event.preventDefault()">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
    </a>
    </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery__link', {
  navText: '<>',
  captionsData: 'alt',
  captionDelay: 250,
});
