class Modal extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.classList.add('modal')
    this.innerHTML = `
      <div class="modal-background"></div>
        <div class="modal-content">
          <!-- Any other Bulma elements you want -->
        </div>
      <button class="modal-close is-large" aria-label="close"></button>
    `;

    const el = document.getElementsByClassName('modal-close')[0]
    el.addEventListener('click', () => {
      this.remove()
    })
  }
}

customElements.define('app-modal', Modal)
