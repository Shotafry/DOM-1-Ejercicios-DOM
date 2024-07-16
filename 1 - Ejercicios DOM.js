//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showMeButton = document.querySelector('.showme')
console.log(showMeButton)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado = document.querySelector('#pillado')
console.log(pillado)

//1.3 Usa querySelector para mostrar por consola todos los p

const allP = document.querySelectorAll('p')
allP.forEach((p) => console.log(p))

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const allPokemon = document.querySelectorAll('.pokemon')
allPokemon.forEach((pokemon) => console.log(pokemon))

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const testMeElements = document.querySelectorAll('[data-function="testMe"]')
testMeElements.forEach((element) => console.log(element))

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const testMePersonaje = document.querySelector(
  '[data-function="testMe"]:nth-of-type(3)'
)
console.log(testMePersonaje)
