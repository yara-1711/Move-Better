class MBNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
          &nbsp;
        </div>
  <div class="navbar-center">
    <a class="btn btn-ghost text-xl">Physiotheraphy Services</a>
  </div>
        <div class="navbar-end">
          &nbsp;
        </div>
</div>
  `;
   }
}

customElements.define("mb-nav-bar", MBNavBar);
