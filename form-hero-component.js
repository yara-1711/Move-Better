class MBFormHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Make an Appointment Now! <br> Get In Touch</h1>
      <p class="py-6">
      Schedule your appointment with Move Better Physiotherapy & Rehabilitation Clinic.
      </p>
       <img
      src="https://movebetterphysiotherapyclinic.com/wp-content/uploads/2024/09/h1-contact-001-e1718267007900.webp"
      class="max-w-sm rounded-lg shadow-2xl"
    />
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <fieldset class="fieldset">
             <label class="label">Name*</label>
          <input type="name" class="input" placeholder="Name" />
          <label class="label">Email*</label>
          <input type="email" class="input" placeholder="Email" />
          <label class="label">Phone*</label>
          <input type="phone" class="input" placeholder="Phone" />
           <label class="label">Message</label>
          <textarea class="textarea" placeholder="Message"></textarea>
          <button class="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  `;
   }
}

customElements.define("mb-form-hero", MBFormHero);