import dogs from "./data.js";
import Dog from "./Dog.js";

function render() {
  document.getElementById("dog").innerHTML = dog.getProfileHtml();
}

function getNextProfile() {
  const nextData = dogs.shift();
  return nextData ? new Dog(nextData) : {};
}

let dog = getNextProfile();
render();

console.log(dogs);
console.log(dogs.shift());
