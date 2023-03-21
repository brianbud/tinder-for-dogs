import dogData from "./data.js";
import Dog from "./Dog.js";

function render() {
  document.getElementById("dog").innerHTML = dogData[0].name;
}

let dog = new Dog(dogData);
