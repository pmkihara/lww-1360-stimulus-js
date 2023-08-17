import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'list']
  static values = {
    baseUrl: String
  }

  connect() {
    this.fetchMovies('avengers')
  }

  search() {
    this.fetchMovies(this.inputTarget.value)
  }

  fetchMovies(query) {
    fetch(`${this.baseUrlValue}?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      this.listTarget.innerHTML = '';
      this.insertMovies(data)
    })
  }

  insertMovies(data) {
    const movies = data.Search
    movies.forEach((result) => {
      const movieTag = `<li class='list-group-item border-0'>
        <img src=${result.Poster} alt='' width='100' height='100%'>
      </li>`
      this.listTarget.insertAdjacentHTML('beforeend', movieTag)
    })
  }
}
