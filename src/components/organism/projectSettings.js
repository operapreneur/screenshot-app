class ProjectSettings extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
      <section id="project-settings">
        <div class="columns">
          <div class="column">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Title</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input id="project_title" class="input" type="text" placeholder="Add Title" value="">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Name</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input id="file_name" class="input" type="text" placeholder="Add File Name" value="">
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="columns">
              <div class="has-text-centered column">
                <div class="fas fa-2x fa-desktop"></div>
                <input id="default_desktop" class="has-text-centered input is-static" type="text" value="1280px">
              </div>
              <div class="has-text-centered column">
                <div class="fas fa-2x fa-tablet-alt"></div>
                <input id="default_tablet" class="has-text-centered input is-static" type="text" value="768px">
              </div>
              <div class="has-text-centered column">
                <div class="fas fa-2x fa-mobile-alt"></div>
                <input id="default_mobile" class="has-text-centered input is-static" type="text" value="320px">
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input id="include_meta" type="checkbox">
                  Include meta globally
                </label>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input id="include_margin" type="checkbox">
                  Include margins globally
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">Add Global CSS</label>
              <div class="control">
                <textarea class="textarea" placeholder=".classname{property:value;}"></textarea>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <label class="label">Add Global JS</label>
              <div class="control">
                <textarea class="textarea" placeholder="function(){console.log('test')}"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="has-background-light has-text-centered">
          Collapse Options
        </div>
      </section>
    `;
  }
}

customElements.define('project-settings', ProjectSettings)
