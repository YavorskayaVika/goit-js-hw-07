import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = { galleryList: document.querySelector(".gallery")
 };

 const galleryMarcup = galleryItems.map(({preview,original,description}) =>{ 

 return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
 </li>`
 }).join("")

 refs.galleryList.insertAdjacentHTML("beforeend", galleryMarcup);

 refs.galleryList.addEventListener("click", onSelectedPictureClick);

 function onSelectedPictureClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
        
    }




 const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        refs.galleryList.addEventListener("keydown", onEscKeyDown);
      },
      onClose: (instance) => {
        refs.galleryList.removeEventListener("keydown", onEscKeyDown);
      },
    }
  );

  instance.show();

  function onEscKeyDown(evt) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}




