class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getProfileHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="img-container">
         <img class="dog-img" src=${avatar} alt="" />
         <div class="dog-info">
           <p class="dog-title">${name}, ${age}</p>
           <p class="dog-tagline">${bio}</p>
         </div>
         <div class="dislike hidden"></div>
         <div class="like hidden"></div>
    </div>
    `;
  }
}

export default Dog;
