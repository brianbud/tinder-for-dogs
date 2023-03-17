import dogData from "./data.js";
import Dog from "./Dog.js";

function render() {
  document.getElementById("dog").innerHTML = dog.getDogHtml();
}

const dog = new Dog(dogData);

render();
