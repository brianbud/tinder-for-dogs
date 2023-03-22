import dogs from "./data.js";
import Dog from "./Dog.js";

function render() {
  document.getElementById("dog").innerHTML = `
   <div class="img-container">
        <img class="dog-img" src="./images/dog-teddy.jpg" alt="" />
        <div class="dog-info">
          <p class="dog-title">Teddy, 30</p>
          <p class="dog-tagline">How you doing?</p>
        </div>
      </div>
      <section id="actions" class="action-btns">
        <img src="images/icon-cross.png" alt="" />
        <img src="images/icon-heart.png" alt="" />
      </section>

   `;
}

render();
