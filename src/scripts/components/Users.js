class Users {
  constructor(container, header, button) {
    this.container = container;
    this.header = header;
    this.button = button;
    // this.title = title;  
  }

  _createHeader() {
    const header = this.header('Пользователи').createElement();
    const button = this.button('button_add', 'Создать').createElement()
    header.appendChild(button);
    return header
  }

  createPages() {
    this.container.innerHTML = '';
    this.container.appendChild(this._createHeader())
  }

}