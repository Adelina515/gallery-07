import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryUl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
  )
  .join("");
console.log(galleryItems);

galleryUl.insertAdjacentHTML("beforeend", markup);
let instance = null;

const handleModal = (ev) => {
  ev.preventDefault();
  if (ev.target.nodeName !== "IMG") return;
  const imgModal = ev.target.dataset.source;
  console.log("target", imgModal);
  instance = basicLightbox.create(
    `
      <div class="modal">
      <img
      class="gallery__imageL"
      src=${imgModal}
      width="800" height="600"
    />
      </div>
  `,
    {
      onClose: () => {
        document.removeEventListener("keydown", handleKeydown);
      },
    }
  );

  instance.show();
  document.addEventListener("keydown", handleKeydown);
};
const handleKeydown = (ev) => {
  if (ev.key === "Escape" && instance) {
    instance.close();
  }
};
galleryUl.addEventListener("click", handleModal);
