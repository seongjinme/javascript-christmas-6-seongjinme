import MENU_ITEM from '../constant/MenuItem.js';

class Menu {
  #items;

  constructor() {
    if (Menu.instance) {
      return Menu.instance;
    }
    this.#items = MENU_ITEM;
    Menu.instance = this;
  }

  static getInstance() {
    if (!Menu.instance) {
      Menu.instance = new Menu();
    }
    return Menu.instance;
  }

  isItemExists(item) {
    return Object.keys(this.#items).includes(item);
  }

  isItemInGivenCategory(menuName, category) {
    return this.#items[menuName].category === category;
  }

  isAllItemsInGivenCategory(menuNames, category) {
    return menuNames.every((menuName) => this.#items[menuName].category === category);
  }

  getItemPrice(menuName) {
    return this.#items[menuName].price;
  }
}

export default Menu;
