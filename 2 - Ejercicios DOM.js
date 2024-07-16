// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let divone = document.createElement('div')
document.body.appendChild(divone)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let ptwo = document.createElement('p')
ptwo.textContent = 'Shotafry!'

let divWithP = document.createElement('div')
divWithP.appendChild(ptwo)
document.body.appendChild(divWithP)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let divtwo = document.createElement('div')
for (let i = 0; i < 6; i++) {
  let p = document.createElement('p')
  p.textContent = `creados con bucle ${i + 1}`
  divtwo.appendChild(p)
}
document.body.appendChild(divtwo)

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let pthree = document.createElement('p')
pthree.textContent = 'Soy dinámico!'
document.body.appendChild(pthree)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2 = document.querySelector('h2.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

let ul = document.createElement('ul')

apps.forEach((app) => {
  let li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})

document.body.appendChild(ul)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let divsToRemove = document.querySelectorAll('.fn-remove-me')

divsToRemove.forEach((div) => {
  div.remove()
})

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
let pfour = document.createElement('p')
pfour.textContent = 'Voy en medio!'

let allDivs = document.querySelectorAll('div')
document.body.insertBefore(pfour, allDivs[1])

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let divs = document.querySelectorAll('.fn-insert-here')

divs.forEach((div) => {
  let pfive = document.createElement('p')
  pfive.textContent = 'Voy dentro!'
  div.appendChild(pfive)
})
