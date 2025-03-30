export function sortArray(array) {
  return array.map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}