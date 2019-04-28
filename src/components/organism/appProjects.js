
const {addNewProject} = require('./../../processRender/manageProjects')
const projects = require('./../../services/projects')

class AppProjects extends HTMLElement {
  constructor() {
    super()

  }
  connectedCallback() {
    this.innerHTML = `
      <section id="app-projects">
        <ul id="project-list">
          <li id="no-projects"><em>No Projects</em></li>
        </ul>
        <header>
          <div class="level">
            <div class="level-item">
              <div id="newProject" class="is-hover is-unselectable has-text-centered">
                <div class="fas fa-inverse fa-lg fa-plus-circle"></div>
                <p>New</p>
              </div>
            </div>
            <div class="level-item">
              <div id="importProject" class="is-hover is-unselectable has-text-centered">
                <div class="fas fa-inverse fa-lg fa-file-import"></div>
                <p>Import</p>
              </div>
            </div>
            <div class="level-item">
              <div id="exportProject" class="is-hover is-unselectable has-text-centered">
                <div class="fas fa-inverse fa-lg fa-file-export"></div>
                <p>Export</p>
              </div>
            </div>
          </div>
        </header>
      </section>
    `;

    //Add Click Listener
    const newProject = document.getElementById('newProject')
    newProject.addEventListener('click', () => {
      addNewProject();
    })

    // Add projects when app loads
    if(projects.getProjectList.length)
      projects.getProjectList.forEach(projects.addProject)


    // Drag n Drop
    var dragSrcEl = null;

    function handleDragStart(e) {
      // Target (this) element is the source node.
      dragSrcEl = this;

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.outerHTML);

      this.classList.add('dragElem');
    }
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
      }
      this.classList.add('over');

      e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

      return false;
    }

    function handleDragEnter(e) {
      // this / e.target is the current hover target.
    }

    function handleDragLeave(e) {
      this.classList.remove('over');  // this / e.target is previous target element.
    }

    function handleDrop(e) {
      // this/e.target is current target element.

      if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
      }

      // Don't do anything if dropping the same column we're dragging.
      if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the column we dropped on.
        //alert(this.outerHTML);
        //dragSrcEl.innerHTML = this.innerHTML;
        //this.innerHTML = e.dataTransfer.getData('text/html');
        this.parentNode.removeChild(dragSrcEl);
        var dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin',dropHTML);
        var dropElem = this.previousSibling;
        addDnDHandlers(dropElem);

      }
      this.classList.remove('over');
      return false;
    }

    function handleDragEnd(e) {
      // this/e.target is the source node.
      this.classList.remove('over');

      /*[].forEach.call(cols, function (col) {
        col.classList.remove('over');
      });*/
    }

    function addDnDHandlers(elem) {
      elem.addEventListener('dragstart', handleDragStart, false);
      elem.addEventListener('dragenter', handleDragEnter, false)
      elem.addEventListener('dragover', handleDragOver, false);
      elem.addEventListener('dragleave', handleDragLeave, false);
      elem.addEventListener('drop', handleDrop, false);
      elem.addEventListener('dragend', handleDragEnd, false);

    }

    var cols = document.querySelectorAll('#project-list .project-item');
    [].forEach.call(cols, addDnDHandlers);
  }
}

customElements.define('app-projects', AppProjects)
