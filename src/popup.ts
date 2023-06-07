import '../styles/popup.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.getElementById('go-to-options').addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});
