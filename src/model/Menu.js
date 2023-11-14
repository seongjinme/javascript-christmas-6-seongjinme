import MENU_ITEM from '../constant/MenuItem.js';

class Menu {
  #items;

  constructor() {
    this.#items = MENU_ITEM;
  }

  isItemExists(item) {
    return Object.keys(this.#items).includes(item);
  }

  isAllItemsInGivenCategory(menuNames, category) {
    return menuNames.every((menuName) => this.#items[menuName].category === category);
  }
}

export default Menu;
