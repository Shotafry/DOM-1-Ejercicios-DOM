// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
let ul = document.createElement('ul')

countries.forEach((country) => {
  let listItem = document.createElement('li')
  listItem.textContent = country
  ul.appendChild(listItem)
})

document.body.appendChild(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let fnRemoveMe = document.querySelector('.fn-remove-me')
if (fnRemoveMe) {
  fnRemoveMe.parentNode.removeChild(fnRemoveMe)
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

let printHere = document.querySelector('[data-function="printHere"]')
let ulCars = document.createElement('ul')

cars.forEach((car) => {
  let listItem = document.createElement('li')
  listItem.textContent = car
  ulCars.appendChild(listItem)
})

printHere.appendChild(ulCars)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const divs = [
  { title: 'First Div', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Second Div', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Third Div', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Fourth Div', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Fifth Div', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

divs.forEach((div) => {
  let divContainer = document.createElement('div')
  let h4 = document.createElement('h4')
  let img = document.createElement('img')
  h4.textContent = div.title
  img.src = div.imgUrl
  divContainer.appendChild(h4)
  divContainer.appendChild(img)

  // Crear el botón para eliminar el div
  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete This Div'
  divContainer.appendChild(deleteButton)

  deleteButton.addEventListener('click', () => {
    divContainer.remove()
  })

  document.body.appendChild(divContainer)
})

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
let deleteButton = document.createElement('button')
deleteButton.textContent = 'Delete Last Div'
document.body.appendChild(deleteButton)
deleteButton.addEventListener('click', () => {
  let lastDiv = document.querySelector('div:last-child')
  if (lastDiv) {
    lastDiv.parentNode.removeChild(lastDiv)
  }
})
