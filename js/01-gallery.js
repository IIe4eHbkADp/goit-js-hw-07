import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const createMarkup = createImagesMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', createMarkup);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

function close(evt) {
  if (evt.keyCode === 27) {
    hidden = 1;
  }
  return;
}

const onContainerClick = evt => {
  evt.preventDefault();

  if (evt.target.classList.contains('gallery')) return;
  const source = evt.target.dataset.source;
  let modalKeyDown;
  const instance = basicLightbox.create(
    `
    <img src="${source}"width="621" height="414">`,

    {
      onShow: instance => {
        document.body.style.overflow = 'hidden';
        window.addEventListener(
          'keydown',
          (modalKeyDown = function (evt) {
            if (evt.code === 'Escape') instance.close();
          }),
        );
      },
      onClose: () => {
        document.body.style.overflow = 'visible';
        window.removeEventListener('keydown', modalKeyDown);
      },
    },
  );
  instance.show();
};

galleryList.addEventListener('click', onContainerClick);
