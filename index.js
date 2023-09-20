var todos = document.querySelector('#todos')
var mujeres = document.querySelector('#mujeres')
var hombres = document.querySelector('#hombres')
var paginaActual = document.querySelector('#pagActual')
var totalPaginas = document.querySelector('#pagTotal')




fetch(`https://rickandmortyapi.com/api/character/`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)

    let elementos = document.getElementById('tarjetas')
    let html = ""
    for (let i = 0; i < 20; i++) {
      html = html +
      `
      <div class='card'>
      <h2>${data.results[i].name}</h2>
      <img src=${data.results[i].image} alt="">
      <p>Estado: ${data.results[i].status}</p>
      <p>Especie: ${data.results[i].species}</p>
      <p>Genero: ${data.results[i].gender}</p>
      </div>
      `
    }
    elementos.innerHTML = html
    totalPaginas.innerHTML = `<p>Total de páginas: ${data.info.pages}</p>`

    //Pagina actual
    //si estoy en el fetch de la pag 1
    if(data.info.prev === null){
      paginaActual.innerHTML = `<p>Página actual: 1</p>`
    } 
    // si estoy en el fetch de la pag 2 el .prev = "https://rickandmortyapi.com/api/character/?page=1"
   else {
    //si la pag anterior tiene 1 solo digito
      let urlPagActual = data.info.prev // ejempo "https://rickandmortyapi.com/api/character/?page=1"
      if(urlPagActual.split('')[urlPagActual.length - 2] === "="){
      let pagActual = urlPagActual.split('')[urlPagActual.length - 1] // esto es igual a "1"
      paginaActual.innerHTML = `<p>Página actual: ${Number(pagActual) + 1}</p>` // lo convierto a numero de 1 y lo sumo
      } else {
        // si la pag anterior tiene 2 solo digitos ejempo "https://rickandmortyapi.com/api/character/?page=19"
        let digitoUno = urlPagActual.split('')[urlPagActual.length - 2] //"1"
        let digitoDos = urlPagActual.split('')[urlPagActual.length - 1] //"9"
        let concatenar = digitoUno + digitoDos //al sumar dos string lo coloca uno al lado del otro = "19"
        paginaActual.innerHTML = `<p>Página actual: ${Number(concatenar) + 1}</p>` //"19" lo convierto a numero y le sumo 1
      }
    }

})

todos.addEventListener('click', () => {
  fetch(`https://rickandmortyapi.com/api/character/`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)

    let elementos = document.getElementById('tarjetas')
    let html = ""
    for (let i = 0; i < 20; i++) {
      html = html +
      `
      <div class='card'>
      <h2>${data.results[i].name}</h2>
      <img src=${data.results[i].image} alt="">
      <p>Estado: ${data.results[i].status}</p>
      <p>Especie: ${data.results[i].species}</p>
      <p>Genero: ${data.results[i].gender}</p>
      </div>
      `
    }
    elementos.innerHTML = html
    totalPaginas.innerHTML = `<p>Total de páginas: ${data.info.pages}</p>`

    //Pagina actual
    //si estoy en el fetch de la pag 1
    if(data.info.prev === null){
      paginaActual.innerHTML = `<p>Página actual: 1</p>`
    } 
    // si estoy en el fetch de la pag 2 el .prev = "https://rickandmortyapi.com/api/character/?page=1"
   else {
    //si la pag anterior tiene 1 solo digito
      let urlPagActual = data.info.prev // ejempo "https://rickandmortyapi.com/api/character/?page=1"
      if(urlPagActual.split('')[urlPagActual.length - 2] === "="){
      let pagActual = urlPagActual.split('')[urlPagActual.length - 1] // esto es igual a "1"
      paginaActual.innerHTML = `<p>Página actual: ${Number(pagActual) + 1}</p>` // lo convierto a numero de 1 y lo sumo
      } else {
        // si la pag anterior tiene 2 solo digitos ejempo "https://rickandmortyapi.com/api/character/?page=19"
        let digitoUno = urlPagActual.split('')[urlPagActual.length - 2] //"1"
        let digitoDos = urlPagActual.split('')[urlPagActual.length - 1] //"9"
        let concatenar = digitoUno + digitoDos //al sumar dos string lo coloca uno al lado del otro = "19"
        paginaActual.innerHTML = `<p>Página actual: ${Number(concatenar) + 1}</p>` //"19" lo convierto a numero y le sumo 1
      }
    }

})
})

mujeres.addEventListener('click', () => {
  fetch(`https://rickandmortyapi.com/api/character/?gender=female`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)

    let elementos = document.getElementById('tarjetas')
    let html = ""
    for (let i = 0; i < 20; i++) {
      html = html +
      `
      <div class='card'>
      <h2>${data.results[i].name}</h2>
      <img src=${data.results[i].image} alt="">
      <p>Estado: ${data.results[i].status}</p>
      <p>Especie: ${data.results[i].species}</p>
      <p>Genero: ${data.results[i].gender}</p>
      </div>
      `
    }
    elementos.innerHTML = html
    totalPaginas.innerHTML = `<p>Total de páginas: ${data.info.pages}</p>`
    if(data.info.prev === null){
      paginaActual.innerHTML = `<p>Página actual: 1</p>`
    }
})
})
hombres.addEventListener('click', () => {
  fetch(`https://rickandmortyapi.com/api/character/?gender=male`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)

    let elementos = document.getElementById('tarjetas')
    let html = ""
    for (let i = 0; i < 20; i++) {
      html = html +
      `
      <div class='card'>
      <h2>${data.results[i].name}</h2>
      <img src=${data.results[i].image} alt="">
      <p>Estado: ${data.results[i].status}</p>
      <p>Especie: ${data.results[i].species}</p>
      <p>Genero: ${data.results[i].gender}</p>
      </div>
      `
    }
    elementos.innerHTML = html
    totalPaginas.innerHTML = `<p>Total de páginas: ${data.info.pages}</p>`
    if(data.info.prev === null){
      paginaActual.innerHTML = `<p>Página actual: 1</p>`
    }
})
})