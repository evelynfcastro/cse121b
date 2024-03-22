/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myprofile ={
    name: "Evelyn Castro",
    photo: "/images/me.jpeg",
    favoriteFood : [
        "Lasanha",
        "Barbecue",
        "Rice",
        "Panquecas",
        "apple"
],
    hobbies:[
        "read",
        "cook",
        "travel",
        "Teach langueges"
    ],
    placedLived:[]
}



/* Populate Profile Object with placesLive objects */

myprofile.placedLived.push({
    place: "Rio Grande do Sul",
    length:"19 years"
});
myprofile.placedLived.push({
    place:"Curitiba",
    length: "1.5 year"
}

)

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent=myprofile.name;
/* Photo with attributes */
const profilePhoto = document.querySelector("#photo");
profilePhoto.setAttribute("src",myprofile.photo);
profilePhoto.setAttribute("alt", `My photo`);

/* Favorite Foods List*/
myprofile.favoriteFood.forEach(food=> {
    let li = document.createElement("li");
    li.textContent=food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myprofile.hobbies.forEach(hobbie=> {
    let li = document.createElement("li");
    li.textContent=hobbie;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */

myprofile.placedLived.forEach(place => {
    let dt= document.createElement("dt");
    dt.textContent=place.place;
    let dd= document.createElement("dd");
    dd.textContent= place.length;
    let dl= document.querySelector("#places-lived");
    dl.appendChild(dt);
    dl.appendChild(dd);
} )

