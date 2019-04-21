class HeaderScreenshots extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
      <div class="level">
        <div class="level-left">
          <h1>Screenshot List</h1>
        </div>
        <div class="level-right">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control">
              <div class="tags has-addons">
                <span class="tag">Screenshots</span>
                <span class="tag is-dark">1</span>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <span class="tag">Status</span>
                <span class="tag is-success">Ready</span>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <span class="tag">Saved</span>
                <span class="tag is-success">02/18/19 12:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('header-screenshots', HeaderScreenshots)
