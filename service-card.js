class ServiceCard extends HTMLElement {
    connectedCallback() {
        let title = this.getAttribute('title');
        this.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${this.getAttribute('image')}"
      alt="Theraphy" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${title}</h2>
    <p>${this.getAttribute('subtitle')}</p>
  </div>
</div>
        `;
    }
}

customElements.define("service-card", ServiceCard);
