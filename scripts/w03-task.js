/* LESSON 3 - Programming Tasks */
/* FUNCTIONS */
/* Function Definition - Add Numbers */
document.getElementById("addNumbers").addEventListener("click", function() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
});

function add(number1, number2) {
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
document.getElementById("subtractNumbers").addEventListener("click", function() {
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subNumber1, subNumber2);
});
function subtract(number1, number2) {
    return number1 - number2;
}



/* Arrow Function - Multiply Numbers */

document.getElementById("multiplyNumbers").addEventListener("click", () =>{
    let multNumber1 = Number(document.querySelector("#factor1").value);
    let multNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multNumber1,multNumber2);
} );
function multiply(number1,number2){
    return number1*number2;
}
/* Open Function Use - Divide Numbers */
document.getElementById("divideNumbers").addEventListener("click", ()=>{
    let Dividend = Number(document.querySelector("#dividend").value);
    let Divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value= divide(Dividend,Divisor);

});
function divide(number1,number2){
    return number1/number2;
}

/* Decision Structure */



document.getElementById("member").addEventListener("change", function() {
    // Check if the checkbox is checked
    const isMember = this.checked;

    // Get the subtotal amount
    const subtotal = Number(document.getElementById("subtotal").value);

    // Apply discount if the checkbox is checked
    //let total;
    
     
    if (isMember===true) {
        //Apply 20% discount
      total = subtotal * 0.8;
        document.querySelector("#total").textContent = `$ ${total}`;
    }
     else if(isMember === false){
        total = subtotal;
        document.querySelector("#total").textContent = `$ ${total}`;
    }
    
    
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray= [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.querySelector("#array").textContent=numberArray.join(", ");

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numberArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */

document.querySelector("#evens").innerHTML= numberArray.filter(number => number %2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numberArray.reduce((sum,number)=> sum + number)
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numberArray.map(number => number*2);

/* Output Sum of Multiplied by 2 Array */
let arrayMultplied = numberArray.map(number => number*2);
document.querySelector("#sumOfMultiplied").innerHTML= arrayMultplied.reduce((sum,number)=> sum + number);