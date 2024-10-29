
// 1 - names.js
// Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// Esporta la funzione dal file.

function full_name(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

module.exports = full_name;