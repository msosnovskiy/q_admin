class Header {
  constructor(text) {
    this.text = text;
  }

  createElement() {
    const item = document.createElement('div');
    item.classList.add('content__header');

    const title = document.createElement('h1');
    title.classList.add('content__title');
    title.textContent = this.text;

    item.appendChild(title);
    return item;
  }
}