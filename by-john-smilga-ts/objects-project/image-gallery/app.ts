function getElement(selection: string): HTMLElement {
  const element = document.querySelector(selection) as HTMLElement;
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element: HTMLElement) {
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];
  // target
  this.modal = getElement(".modal");
  this.modalImg = getElement(".main-img");
  this.imageName = getElement(".image-name");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");
  // self ref
  // let self = this;
  // bind functions
  // this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.chooseImage = this.chooseImage.bind(this);
  // container event
  this.container.addEventListener(
    "click",
    function (e: MouseEvent) {
      // self.openModal();
      if ((e.target as HTMLElement).classList.contains("img")) {
        this.openModal(e.target as HTMLImageElement, this.list);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (
  selectedImage: HTMLImageElement,
  list: HTMLImageElement[]
) {
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`;
    })
    .join("");
  this.modal.classList.add("open");
  this.closeBtn.addEventListener("click", this.closeModal);
  this.nextBtn.addEventListener("click", this.nextImage);
  this.prevBtn.addEventListener("click", this.prevImage);
  this.modalImages.addEventListener("click", this.chooseImage);
};

Gallery.prototype.setMainImage = function (selectedImage: HTMLImageElement) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  this.closeBtn.removeEventListener("click", this.closeModal);
  this.nextBtn.removeEventListener("click", this.nextImage);
  this.prevBtn.removeEventListener("click", this.prevImage);
  this.modalImages.removeEventListener("click", this.chooseImage);
};

Gallery.prototype.nextImage = function () {
  const selected = this.modalImages.querySelector(
    ".selected"
  ) as HTMLImageElement;
  const next =
    selected.nextElementSibling ||
    (this.modalImages.firstElementChild as HTMLImageElement);
  selected.classList.remove("selected");
  next.classList.add("selected");
  this.setMainImage(next);
};

Gallery.prototype.prevImage = function () {
  const selected = this.modalImages.querySelector(
    ".selected"
  ) as HTMLImageElement;
  const prev =
    selected.previousElementSibling ||
    (this.modalImages.lastElementChild as HTMLImageElement);
  selected.classList.remove("selected");
  prev.classList.add("selected");
  this.setMainImage(prev);
};

Gallery.prototype.chooseImage = function (e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains("modal-img")) {
    const selected = this.modalImages.querySelector(
      ".selected"
    ) as HTMLImageElement;
    selected.classList.remove("selected");

    this.setMainImage(e.target as HTMLImageElement);
    (e.target as HTMLImageElement).classList.add("selected");
  }
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
