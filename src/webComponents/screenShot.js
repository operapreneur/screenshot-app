
class ScreenShot extends HTMLElement {
  constructor() {
    super()
    this.iconID = 'shot-1'
    this.innerHTML = `
      <article>
        <header>
          <div id="add-shot" class="fas fa-plus"></div>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <i class="fas fa-grip-vertical"></i>
              </div>
              <div class="level-item">
                <input id="shot_title" class="is-static input" type="text" name="shot-title" value="" placeholder="Add Screenshot Title">
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span id="delete-shot" class="fas fa-trash"></span>
              </div>
            </div>
          </div>
        </header>
        <div id="shot-body">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">URL</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input id="shot_URL" class="input" type="url" placeholder="Add URL" value="">
                  <span class="icon is-small is-left">
                    <i class="fas fa-link"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <div class="control has-icons-left">
                  <div class="select">
                    <select id="shot_type">
                      <option selected>Desktop</option>
                      <option>Tablet</option>
                      <option>Mobile</option>
                      <option>Crop</option>
                    </select>
                  </div>
                  <div class="icon is-small is-left">
                    <i class="fas fa-desktop"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Crop</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded">
                      <input id="shot_crop_x" class="input" type="number" placeholder="Width" value="">
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded">
                      <input id="shot_crop_y" class="input" type="number" placeholder="Height" value="">
                    </p>
                  </div>
                  <div class="field">
                    <p class="control">
                      <button class="button is-link">Crop</button>
                    </p>
                  </div>
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
                <label class="label">Add CSS</label>
                <div class="control">
                  <textarea class="textarea" placeholder=".classname{property:value;}"></textarea>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Add JS</label>
                <div class="control">
                  <textarea class="textarea" placeholder="function(){console.log('test')}"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="has-background-light has-text-centered">
          Collapse Options
        </div>
      </article>
    `;
  }

}

customElements.define('screen-shot', ScreenShot)
