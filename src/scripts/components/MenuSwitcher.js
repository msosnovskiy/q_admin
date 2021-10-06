class MenuSwitcher {
  constructor(menu, burgerButton, logo, logoutButton) {
    this.menu = menu;
    this.burgerButton = burgerButton;
    this.logo = logo;
    this.logoutButton = logoutButton;

    this.burgerIcon = this.burgerButton.querySelector('.menu__icon');
    this.menuTexts = this.menu.querySelectorAll('.menu__text');
    this.activeLink = this.menu.querySelector('.menu__link_active');
    this.menuLinks = this.menu.querySelectorAll('.menu__link');
  }

  // _getMenuStateFromLocalstorage() {
  //   let state = localStorage.getItem('menu');
  //   if (state === null) {
  //     localStorage.setItem('menu', JSON.stringify({ state: 'full', firstLoaded: true }));
  //   }
  //   else {
  //     let storageData = JSON.parse(state);
  //     return storageData;
  //   };
  // }

  _getMenuStateFromLocalstorage() {
    let state = localStorage.getItem('menu');
    if (state === null) {
      localStorage.setItem('menu', 'full');
    }
    else return state;
  }

  // _changeMenuStateFromLocalStorage(json) {
  //   if (json.state == 'full') {
  //     // let storage = { state: 'small', firstLoaded: false };
  //     localStorage.setItem('menu', JSON.stringify({ state: 'small', firstLoaded: false }));
  //   }
  //   else localStorage.setItem('menu', JSON.stringify({ state: 'full', firstLoaded: false }));
  // }
  
  _changeMenuStateFromLocalStorage(state) {
    if (state == 'full') {
      localStorage.setItem('menu', 'small');
    }
    else localStorage.setItem('menu', 'full');
  }

  _setMenuState(state) {
    if (state === 'full') {
      this.menu.classList.remove('menu_small');
      this.menu.classList.add('menu_full');
    }
    else {
      this.menu.classList.remove('menu_full');
      this.menu.classList.add('menu_small');
    }
  }

  _setBurgerState(state) {
    if (state === 'full') {
      this.burgerIcon.classList.add('menu__icon_active');
    }
    else this.burgerIcon.classList.remove('menu__icon_active');
  }

  _setLogoState(state) {
    if (state === 'full') {
      const showLogo = () => {
        this.logo.textContent = 'QUSI';
      }
      setTimeout(showLogo, 150);

    }
    else {
      this.logo.textContent = 'Q'
    }
  }

  _setLinksState(state) {
    this.menuTexts.forEach((item) => {
      if (state === 'full') {
        item.classList.add('menu__text_visible');
      }
      else {
        item.classList.remove('menu__text_visible')
      };
    })
  }

  _setLogoutButtonState(state) {
    const logoutButtonText = this.logoutButton.querySelector('.menu__button-text');
    if (state === 'full') {
      logoutButtonText.classList.add('menu__button-text_visible');
    }
    else logoutButtonText.classList.remove('menu__button-text_visible');
  }

  switchMenu() {
    let state = this._getMenuStateFromLocalstorage();
    this._setMenuState(state);
    this._setBurgerState(state);
    this._setLogoState(state);
    this._setLinksState(state);
    this._setLogoutButtonState(state);
  }

  setEventListener() {

    //Определение вида меню при первичной загрузке страницы
    this.switchMenu();

    this.burgerButton.addEventListener('click', () => {
      this._changeMenuStateFromLocalStorage(this._getMenuStateFromLocalstorage());
      this.switchMenu();
    })

    this.menuLinks.forEach((item) => {
      item.addEventListener('click', () => {
        if (item !== this.activeLink) {
          this.activeLink.classList.remove('menu__link_active');
          item.classList.add('menu__link_active');
          this.activeLink = item;
        }
        else return;
      })
    })
  }
}