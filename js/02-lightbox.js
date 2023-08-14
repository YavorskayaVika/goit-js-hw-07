import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryList: document.querySelector(".gallery"),
  };
  
  const galleryMarkup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`
    )
    .join("");
  
  refs.galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
  
  const lightbox = new SimpleLightbox(".gallery a", {
    /* options */
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });














