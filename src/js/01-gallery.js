import { galleryItems } from './gallery-items.js';

const instance = basicLightbox.create(`
    <img src="#" width="800" height="600">
`);

let currentImg;
const gallery = document.querySelector('.gallery');

function addItems(arr) {
  const arrItems = [];

  arr.map(item => {
    const { preview, original, description } = item;

    const galleryItem = document.createElement('div');
    const galleryItemLink = document.createElement('a');
    const galleryItemImg = document.createElement('img');
    galleryItem.classList.add('gallery__item');
    galleryItemLink.classList.add('gallery__link');
    galleryItemImg.classList.add('gallery__image');
    galleryItemLink.setAttribute('href', original);
    galleryItemImg.setAttribute('src', preview);
    galleryItemImg.setAttribute('data-source', original);
    galleryItemImg.setAttribute('alt', description);
    galleryItemLink.append(galleryItemImg);
    galleryItem.append(galleryItemLink);
    arrItems.push(galleryItem);
  });

  gallery.append(...arrItems);
}
addItems(galleryItems);

function openModal(e) {
  currentImg = e.target;

  if (currentImg.nodeName === 'IMG') {
    e.preventDefault();
    const url = currentImg.dataset.source;

    instance.show();
    const lightBoxImage = document.querySelector(
      '.basicLightbox__placeholder img'
    );
    lightBoxImage.setAttribute('src', url);
  }

  window.addEventListener('keydown', closeModalByKey);
}

gallery.addEventListener('click', openModal);

function closeModalByKey(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}
