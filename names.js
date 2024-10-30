
// 1 - names.js
// Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// Esporta la funzione dal file.

function full_name(firstName, lastName) {
  const user = {
    firstName: firstName,
    lastName: lastName,
  }
  return user
}

module.exports = full_name;