
// overview: https://www.webcomponents.org/introduction
// examples: https://github.com/mdn/web-components-examples

// LIBRARIES
// https://stenciljs.com/
// https://www.polymer-project.org/


class ScreenCanvas extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});

    const canvas = document.createElement('div');
    const style = document.createElement('style');
    style.textContent = `
      div {background:blue; width:100%; height:100px;}
    `;

    shadowRoot.appendChild(canvas);
    shadowRoot.appendChild(style);
  }
}

window.customElements.define('screen-canvas', ScreenCanvas);
