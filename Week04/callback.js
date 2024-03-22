sum(displayPage,2,3);
function sum(callback,x,y){
    let result= x+y;
    callback(result);
}
function displayPage(result){
    document.getElementById("myH1").innerHTML= result;
}



const nums = [44,2,66,45,17];
let result1 = nums.reduce((max,item) => Math.max(max,item))
console.log(result);
document.getElementById("result").textContent=result1;

calculate(2,3,displayPage)

function calculate(a, b, callback) {
    callback(a + b);
  }
  
  function displayResult(result) {
    console.log('The result is: ' + result);
  }
