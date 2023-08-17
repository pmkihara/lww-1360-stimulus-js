import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['button', 'link']

  connect() {
    console.log('conectou');
  }

  disable() {
    this.buttonTarget.classList.remove('btn-primary');
    this.buttonTarget.classList.add('btn-danger');
    this.buttonTarget.innerText = 'Bingo!'
    this.buttonTarget.disabled = true;
    this.linkTarget.classList.remove('d-none');
  }

  reset() {
    this.buttonTarget.classList.add('btn-primary');
    this.buttonTarget.classList.remove('btn-danger');
    this.buttonTarget.innerText = 'Click me'
    this.buttonTarget.disabled = false;
    this.linkTarget.classList.add('d-none');
  }
}
