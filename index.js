import dogs from "./data.js";
import Dog from "./Dog.js";

function render() {
  document.getElementById("dog").innerHTML = dog.getCharacterHtml();
}

const dog = new Dog();

render();
