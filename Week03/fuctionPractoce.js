let Name = "Evelyn";
let lastName = "Castro";
const fullname = function (first, last){
    return `${first} ${last}`;
}

//const fullname = function (firstname, lastname) => `${firstname} ${lastname}`;


document.querySelector('#fullname').innerHTML = fullname(Name, lastName);