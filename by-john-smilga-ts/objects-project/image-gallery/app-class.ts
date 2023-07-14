function getElement<T extends HTMLElement>(selection: string): T {
  const element = document.querySelector(selection);
  if (element) {
    return element as T;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery {
  private container: HTMLElement;
  private list: HTMLImageElement[];
  private modal: HTMLElement;
  private modalImg: HTMLImageElement;
  private imageName: HTMLElement;
  private modalImages: HTMLElement;
  private closeBtn: HTMLElement;
  private nextBtn: HTMLElement;
  private prevBtn: HTMLElement;

  constructor(element: HTMLElement) {
    this.container = element;
    this.list = Array.from(
      element.querySelectorAll(".img")
    ) as HTMLImageElement[];
    // target
    this.modal = getElement(".modal");
    this.modalImg = getElement(".main-img");
    this.imageName = getElement(".image-name");
    this.modalImages = getElement(".modal-images");
    this.closeBtn = getElement(".close-btn");
    this.nextBtn = getElement(".next-btn");
    this.prevBtn = getElement(".prev-btn");
    // bind functions
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    // container event
    this.container.addEventListener("click", (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains("img")) {
        this.openModal(e.target as HTMLImageElement, this.list);
      }
    });
  }

  private setMainImage(selectedImage): void {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
  }

  private closeModal(): void {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.chooseImage);
  }

  private nextImage(): void {
    const selected =
      this.modalImages.querySelector<HTMLImageElement>(".selected");
    const next =
      selected?.nextElementSibling ||
      (this.modalImages.firstElementChild as HTMLImageElement);
    selected?.classList.remove("selected");
    next?.classList.add("selected");
    if (next) {
      this.setMainImage(next);
    }
  }

  private prevImage(): void {
    const selected = this.modalImages.querySelector(
      ".selected"
    ) as HTMLImageElement;
    const prev =
      selected?.previousElementSibling ||
      (this.modalImages.lastElementChild as HTMLImageElement);
    selected?.classList.remove("selected");
    prev?.classList.add("selected");
    if (prev ) {
      this.setMainImage(prev);
    }
  }

  private chooseImage(e: MouseEvent): void {
    if ((e.target as HTMLElement).classList.contains("modal-img")) {
      const selected = this.modalImages.querySelector(
        ".selected"
      ) as HTMLImageElement;
      selected?.classList.remove("selected");
      const target = e.target as HTMLImageElement;
      this.setMainImage(target);
      target.classList.add("selected");
    }
  }

  public openModal(
    selectedImage: HTMLImageElement,
    list: HTMLImageElement[]
  ): void {
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
      .map((image) => {
        return `<img src="${image.src}" title="${image.title}" data-id="${
          image.dataset.id
        }" class="${
          selectedImage.dataset.id === image.dataset.id
            ? "modal-img selected"
            : "modal-img"
        }"/>`;
      })
      .join("");
    this.modal.classList.add("open");
    this.closeBtn.addEventListener("click", this.closeModal);
    this.nextBtn.addEventListener("click", this.nextImage);
    this.prevBtn.addEventListener("click", this.prevImage);
    this.modalImages.addEventListener("click", this.chooseImage);
  }
}

const nature = new Gallery(getElement<HTMLElement>(".nature"));
const city = new Gallery(getElement<HTMLElement>(".city"));
