// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
const addMurkup = createImageMurkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", addMurkup);

function createImageMurkup(galleryItems) {
return galleryItems
.map(({preview, original, description})=>{
    return`
    <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
  </a>`;
})
.join("");
};



const lightbox = new SimpleLightbox('.gallery a', { 
    captionType: "attr",
    captionPosition: "bottom",
    captionDelay: 250,
    captionsData: "alt",  
 });
console.log(galleryItems);
