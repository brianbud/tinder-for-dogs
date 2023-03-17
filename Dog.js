class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name } = this;
    return `
        <div>
            ${name}
        </div>
    `;
  }
}

export default Dog;
