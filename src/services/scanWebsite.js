
module.exports = function scanWebsite() {
  console.log('clicked module');
  let modal = document.createElement('app-modal')
  document.body.appendChild(modal)
  modal.classList.add('is-active')
}

// getURLs() => {
  // TODO scan a page for hrefs like code below
  // RUN in console: urls = $$('a'); for (url in urls) console.log ( urls[url].href );
// }
