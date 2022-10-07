const favourites = {
  favPoke: []
}
const state = {
    pokemon: [],
    loggedInUserName: null
}

// fetch('/api/pokemon')
//     .then(res => res.json())
//     .then(pokemon => {
//         state.pokemon = pokemon
//         renderPokemonList()
//     })

fetch('/api/sessions')
  .then(res => res.json())
  .then(userName => {
    if (typeof userName === 'string'){
      state.loggedInUserName = userName
    }
  })
let email = state.loggedInUserName
fetch(`/api/users/fav1/:${email}`)
  .then(res => res.json())
  .then(favPoke => {
    favourites.favPoke = favPoke
    console.log(favourites.favPoke)
  })

  // should take the favourites table data but instead uses a favourites object that has been defined elsewhere