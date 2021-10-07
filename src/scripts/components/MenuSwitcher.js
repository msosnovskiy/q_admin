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
    this.firstLoaded = true;
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

  _setFirstMenuState(state) {
    if (state === 'full') {
      this.menu.classList.remove('menu_small');
      this.menu.classList.add('menu_full');
    }
    else {
      this.menu.classList.remove('menu_full');
      this.menu.classList.add('menu_small');
    }
    this.firstLoaded = true;
  }

  _setMenuStateByBurgerButton(state) {
    if (state === 'full') {
      this.menu.classList.remove('menu_small');
      this.menu.classList.remove('menu_small-animation');
      this.menu.classList.add('menu_full');
      this.menu.classList.add('menu_full-animation');
    }
    else {
      this.menu.classList.remove('menu_full');
      this.menu.classList.remove('menu_full-animation');
      this.menu.classList.add('menu_small');
      this.menu.classList.add('menu_small-animation');
    }
    this.firstLoaded = false;
  }

  _setBurgerButtonState(state) {
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
      if (state === 'full' && this.firstLoaded) {
        item.classList.add('menu__text_visible');
      }
      else if (state === 'full' && !this.firstLoaded) {
        item.classList.add('menu__text_visible');
        item.classList.add('menu__text_animation');
      }
      else {
        item.classList.remove('menu__text_visible');
        item.classList.remove('menu__text_animation');
      };
    })
  }

  _setLogoutButtonState(state) {
    const logoutButtonText = this.logoutButton.querySelector('.menu__button-text');
    if (state === 'full' && this.firstLoaded) {
      logoutButtonText.classList.add('menu__button-text_visible');
    }
    if (state === 'full' && !this.firstLoaded) {
      logoutButtonText.classList.add('menu__button-text_visible');
      logoutButtonText.classList.add('menu__button-text_animation');
    }
    else {
      logoutButtonText.classList.remove('menu__button-text_visible');
      logoutButtonText.classList.remove('menu__button-text_animation');
    };
  }

  _switchMenu() {
    let state = this._getMenuStateFromLocalstorage();
    if (this.menu.classList.contains('menu_small') || this.menu.classList.contains('menu_full')) {
      this._setMenuStateByBurgerButton(state);
    }
    else {
      this._setFirstMenuState(state);
    }
    this._setBurgerButtonState(state);
    this._setLogoState(state);
    this._setLinksState(state);
    this._setLogoutButtonState(state);
  }

  setEventListener() {

    //Определение вида меню при первичной загрузке страницы
    this._switchMenu();

    this.burgerButton.addEventListener('click', () => {
      this._changeMenuStateFromLocalStorage(this._getMenuStateFromLocalstorage());
      this._switchMenu();
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