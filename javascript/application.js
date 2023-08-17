import { Application } from 'stimulus';
import DisableButtonController from './controllers/disable_button_controller.js'
import MoviesController from './controllers/movies_controller.js'
window.Stimulus = Application.start()
window.Stimulus.register('disable-button', DisableButtonController)
window.Stimulus.register('movies', MoviesController)

// const button = document.querySelector('#click-me');
// const button = document.getElementById('click-me');
// button.addEventListener('click', (event) => {
//   // console.log('cliquei');
//   event.currentTarget.classList.remove('btn-primary');
//   event.currentTarget.classList.add('btn-danger');
//   event.currentTarget.innerText = 'Bingo!';
// })
