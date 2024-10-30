// 3 - people.js*


// Importa la tua funzione da names.js
const people_name = require('./names.js')

// Importa la tua funzione da hobbies.js
const people_hobby = require('./hobbies.js')


// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
// All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

function full_user() {
    const user = people_name('Emanuele', 'Meggiarin')

    const user_hobby = people_hobby('Cinema', 'Tennis', 'Bike')

    const new_user = {...user, ...user_hobby}

    return new_user

    // return {
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     hobbies: user_hobby.hobbies
    // }
}

const userAll = full_user()
console.log(userAll);

