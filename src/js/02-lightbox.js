import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`
  )
  .join("");

galleryUl.insertAdjacentHTML("beforeend", markup);

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

// Ініціалізація SimpleLightbox: Після того, як розмітка додана до DOM,
//  створюється новий екземпляр SimpleLightbox(let lightbox).Він приймає
// селектор, який вказує на всі посилання у галереї('.gallery a'), та об'єкт
// налаштувань.Налаштування включають: відображення підписів, джерело підпису з
// атрибута alt, розташування підпису знизу, затримка перед відображенням
// підпису — 250 мс.
