import { atom, map } from 'nanostores';

const $chosenPlayers = atom([]);
const $listaRegras = map({
  regras: []
});

function updateChosenPlayers(isPlayer) {
  if (!window.localStorage.getItem('chosenPlayers')) {
    window.localStorage.setItem('chosenPlayers', JSON.stringify(isPlayer || $chosenPlayers.get()));
  } else if (isPlayer === undefined) {
    $chosenPlayers.set(JSON.parse(window.localStorage.getItem('chosenPlayers')))
  } else {
    $chosenPlayers.set(isPlayer)
    window.localStorage.setItem('chosenPlayers', JSON.stringify(isPlayer));
  }
  console.log("update jogador :: ", $chosenPlayers.get())
}

async function getRegras() {
  const regrasCopinha = await fetch("/api/regras/database")
  .then((res) => res.json())
  .then((data) => {
    return data;
  });
  $listaRegras.setKey("regras", regrasCopinha)
  console.log("Inserir no store :: ", $listaRegras.get()["regras"])
}

export {
  $chosenPlayers,
  $listaRegras,
  updateChosenPlayers,
  getRegras
}