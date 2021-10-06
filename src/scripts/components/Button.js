class Button {
  constructor(imgClass, text) {
    this.imgClass = imgClass;
    this.text = text;
  }

  createElement() {
    const item = document.createElement('button');
    item.classList.add('button');
    item.textContent = this.text;
    
    const img = document.createElement('span');
    img.classList.add(`${this.imgClass}`);

    item.prepend(img);

    return item;
  }
}