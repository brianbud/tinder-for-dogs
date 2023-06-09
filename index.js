import dogs from "./data.js";
import Dog from "./Dog.js";
const dislikeBtn = document.getElementById("dislike-btn");
const likeBtn = document.getElementById("like-btn");
dislikeBtn.addEventListener("click", dislikeProfile);
likeBtn.addEventListener("click", likeProfile);

function dislikeProfile() {
  usersActionChoice(false);
  document.querySelector(".dislike").classList.toggle("hidden");
}

function likeProfile() {
  usersActionChoice(true);
  document.querySelector(".like").classList.toggle("hidden");
}

function usersActionChoice(choice) {
  dog.setHasBeenLiked(choice);
  dog.setHasBeenSwiped(true);

  setTimeout(() => {
    document.querySelector(".dislike").classList.toggle("hidden");
    if (dogs.length > 0) {
      dog = getNextProfile();
      render();
    } else {
      noMoreProfiles();
    }
  }, 1000);
}

function noMoreProfiles() {
  document.getElementById("dog").innerHTML = `
    <h2 class="end-message">No More users to show</h2>
  `;

  document.getElementById("actions").innerHTML = `
  <h2 class= "end-message" >Check again in a while</h2>
  `;
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
