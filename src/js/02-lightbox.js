import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function addItems(arr) {
  const arrItems = [];

  arr.map(item => {
    const { preview, original, description } = item;
    const galleryItem = document.createElement('li');
    const galleryItemLink = document.createElement('a');
    const galleryItemImg = document.createElement('img');
    galleryItemLink.classList.add('gallery__item');
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

let lightbox = new SimpleLightbox('.gallery__item', {
  caption: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
});
lightbox.on('show.simplelightbox');
