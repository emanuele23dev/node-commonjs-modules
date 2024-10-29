// 2 - hobbies.js
// Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
// Esporta la funzione dal file.

function hobbies(hobbyOne, hobbyTwo, hobbyThree) {
  return {
    hobbys: [hobbyOne, hobbyTwo, hobbyThree],
  };
}

module.exports = hobbies;
