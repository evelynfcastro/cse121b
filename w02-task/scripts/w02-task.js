/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Evelyn Fernandes Castro";
let currentYear = "2024";
let profilePicture = "images/me.jpeg";




/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */


nameElement.innerHTML=`<strong> ${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `My photo`);



/* Step 5 - Array */

const favoriteFood = ["pizza", "hamburguer", "sandwich", "egg"]
foodElement.innerHTML = favoriteFood.join("<br>");
const newfavoriteFood = "rice"
favoriteFood.push(newfavoriteFood);
foodElement.innerHTML+= `<br>${favoriteFood.join("<br>")}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favFoods.join("<br>")}`;





