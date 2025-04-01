import { atom, map } from 'nanostores';

const $chosenPlayers = atom([]);
const $vencedor = atom("");
const $listaRegras = map({
  regras: []
});
const $regraEscolhida = atom({});

function updateChosenPlayers(isPlayer) {
  if (!window.localStorage.getItem('chosenPlayers')) {
    window.localStorage.setItem('chosenPlayers', JSON.stringify(isPlayer || $chosenPlayers.get()));
  } else if (isPlayer === undefined) {
    $chosenPlayers.set(JSON.parse(window.localStorage.getItem('chosenPlayers')))
  } else {
    $chosenPlayers.set(isPlayer)
    window.localStorage.setItem('chosenPlayers', JSON.stringify(isPlayer));
  }
}

async function getRegras() {
  const regrasCopinha = await fetch("/api/regras/database")
  .then((res) => res.json())
  .then((data) => {
    return data;
  });
  $listaRegras.setKey("regras", regrasCopinha)
}

function setRegra(regra) {
  $regraEscolhida.set(regra);
}

function setVencedor(winner) {
  $vencedor.set(winner);
}

export {
  $chosenPlayers,
  $listaRegras,
  $regraEscolhida,
  $vencedor,
  updateChosenPlayers,
  getRegras,
  setRegra,
  setVencedor
}