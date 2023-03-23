import dogs from "./data.js";
import Dog from "./Dog.js";
const dislikeBtn = document.getElementById("dislike-btn");
const likeBtn = document.getElementById("like-btn");

dislikeBtn.addEventListener("click", dislikeProfile);
likeBtn.addEventListener("click", likeProfile);

function dislikeProfile() {
  document.querySelector(".dislike").classList.toggle("hidden");
  console.log("dislike btn clicked");
}

function likeProfile() {
  document.querySelector(".like").classList.toggle("hidden");
  console.log("Like btn clicked");
}

function render() {
  document.getElementById("dog").innerHTML = dog.getProfileHtml();
}

function getNextProfile() {
  const nextData = dogs.shift();
  return nextData ? new Dog(nextData) : {};
}

let dog = getNextProfile();
render();
