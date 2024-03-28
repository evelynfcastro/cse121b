/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");
const templeList=[]
/* async displayTemples Function */

const displayTemples = (temples) =>{ 
    temples.forEach(temple => { 
   const newArticle= document.createElement("article");
   const newH3 = document.createElement("h3");
   newH3.textContent=temple.templeName; 
   const newImg = document.createElement("img");
   newImg.src= temple.imageUrl;
   newImg.slt= temple.templeName;

   newArticle.appendChild(newImg);
   newArticle.appendChild(newH3);
   templesElement.appendChild(newArticle);

}); 

}
/* async getTemples Function using fetch()*/

const getTemples  = async()=>{
    try{
    const response  = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    templeList.push(...data);
} catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}


/* reset Function */

const reset = function(){ 
    const article = document.querySelectorAll("article");
    article.forEach(article=>{
        article.remove();
    })
    

}
/* filterTemples Function */
const filterTemples = function (temples){
 reset();
 const filter1 = document.getElementById("filtered").value;
 let filteredTemples;
 switch(filter1){
 case "utah":
     filteredTemples= temples.filter(temple => temple.location.includes("Utah"));
    break;
case "notutah":
    filteredTemples=  temples.filter(temple=> !temple.location.includes("Utah"));
    break
case "older":
    filteredTemples= temples.filter(temple => new Date(temple.dedicated) < new Date (1950,0,1));
    break;
case "all":
    filteredTemples=  temples;
    break;
default:
    filteredTemples= [];
}
displayTemples(filteredTemples);
}



/* Event Listener */
document.querySelector("#filtered").addEventListener("change",()=>{filterTemples(templeList)});
getTemples();