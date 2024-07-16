//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
document.getElementById('btnToClick').addEventListener('click', (event) => {
  console.log('Button clicked', event)
})

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
document.querySelector('.focus').addEventListener('focus', (event) => {
  console.log(event.target.value)
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
document.querySelector('.value').addEventListener('input', (event) => {
  console.log(event.target.value)
})

//1.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
] //creo que al profe le gusta el metal o musica de ese estilo xD, este es un easter egg para el profe

const ul = document.createElement('ul')

albums.forEach((album) => {
  const li = document.createElement('li')
  li.textContent = album
  ul.appendChild(li)
})
document.body.appendChild(ul)
