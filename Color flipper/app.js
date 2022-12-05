const app=["green", "red", "rgba(133,122,100)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){

const randomColor=app[getRandomNumber()];

color.textContent=randomColor;
document.body.style.backgroundColor = randomColor;

});


function getRandomNumber(){
  return Math.floor( Math.random()*app.length);
}
