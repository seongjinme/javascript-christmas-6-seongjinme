import MENU_ITEM from '../constant/MenuItem.js';

class Menu {
  #items;

  constructor() {
    this.#items = MENU_ITEM;
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
