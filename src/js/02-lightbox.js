import { galleryItems } from './gallery-items.js';
// Change code below this line

let currentImg;
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
console.log(gallery);

let lightbox = new SimpleLightbox('.gallery__item');
lightbox.on('show.simplelightbox', function (e) {
  // Посмотри в документации секцию «Options» и
  // добавь отображение подписей к изображениям из атрибута alt.
  // Пусть подпись будет снизу и появляется через 250 миллисекунд
  // после открытия изображения.

  currentImg = e.target.children[0];
  let caption = currentImg.getAttribute('alt');
  console.log(caption);
  //   lightbox.captionType(caption); - не работает
});
