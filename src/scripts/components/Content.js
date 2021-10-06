class Content {
  constructor(container) {
    this.container = container;
    // this.element = element;
  }


  render(element) {
    this.container.innerHTML = '';
    this.container.appendChild(element)
  };
}