class MBCarousel extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="carousel carousel-center rounded-box">
  <div class="carousel-item">
    <img src="image1.webp" />
  </div>
   <div class="carousel-item">
    <img src="image2.webp" />
  </div>
   <div class="carousel-item">
    <img src="image3.webp" />
  </div>
   <div class="carousel-item">
    <img src="image4.webp" />
  </div>
   <div class="carousel-item">
    <img src="image5.webp" />
  </div>
   <div class="carousel-item">
    <img src="image6.webp" />
  </div>
   <div class="carousel-item">
    <img src="image7.webp" />
  </div>
   <div class="carousel-item">
    <img src="image8.webp" />
  </div>
</div>
  `;
    }
}

customElements.define("mb-carousel", MBCarousel);