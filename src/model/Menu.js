import MENU_CATEGORY from '../constant/MenuCategory.js';
import MENU_ITEM from '../constant/MenuItem.js';

class Menu {
  #items;
  #categories;

  constructor() {
    if (Menu.instance) {
      return Menu.instance;
    }
    this.#items = MENU_ITEM;
    this.#categories = MENU_CATEGORY;
    Menu.instance = this;
  }

  static getInstance() {
    if (!Menu.instance) {
      Menu.instance = new Menu();
    }
    return Menu.instance;
  }

  static resetInstance() {
    if (Menu.instance) {
      Menu.instance = null;
    }
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

  getItemDetail(menuName) {
    return this.#items[menuName];
  }

  getItemPrice(menuName) {
    return this.#items[menuName].price;
  }

  getCategoryName(category) {
    return this.#categories[category];
  }
}

export default Menu;
