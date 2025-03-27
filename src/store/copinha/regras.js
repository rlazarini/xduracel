import { atom } from 'nanostores';

export const chosenPlayers = atom([]);

export function updateChosenPlayers(isPlayer) {
  if (!window.localStorage.getItem('chosenPlayers')) {
    window.localStorage.setItem('chosenPlayers', JSON.stringify(isPlayer || chosenPlayers.get()));
  } else if (isPlayer === undefined) {
    chosenPlayers.set(JSON.parse(window.localStorage.getItem('chosenPlayers')))
  } else {
    chosenPlayers.set(isPlayer)
    window.localStorage.setItem('chosenPlayers', JSON.stringify(isPlayer));
  }
  console.log("LOCAL STORAGE :: ", window.localStorage)
}