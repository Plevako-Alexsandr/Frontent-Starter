class MobileMenu {

  selectors = {
    root: "[data-js-header='']",
    menu: "[data-js-mobile-menu='']",
    burgerButton: "[data-js-mobile-menu-burger-button='']"
  }

  stateClasses = {
    hiddenMobile: "hidden-mobile",
    burgerButtonOpen: "burgerButton--open"
  }


  constructor () {
    this.rootElement = document.querySelector(this.selectors.root)
    this.menuElement = this.rootElement.querySelector(this.selectors.menu)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
    console.log(this.burgerButtonElement);
    
    this.bindEvents()
  }


  onBurgerButtonClick = () => {
    this.menuElement.classList.toggle(this.stateClasses.hiddenMobile)
    this.burgerButtonElement.classList.toggle(this.stateClasses.burgerButtonOpen)
  }

  bindEvents() {
    
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
  }

}

export default MobileMenu