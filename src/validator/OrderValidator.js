import MENU_CATEGORY from '../constant/MenuCategory.js';
import SETTING from '../constant/Setting.js';
import ERROR_MESSAGE from '../constant/ErrorMessage.js';
import CustomError from '../error/CustomError.js';
import Menu from '../model/Menu.js';

class OrderValidator {
  #menu;

  constructor() {
    this.#menu = new Menu();
  }

  static validateOrderFormat(orderInput) {
    const regexp = /^([가-힣]+-\d+)(,([가-힣]+-\d+))*$/;
    if (!regexp.test(orderInput)) {
      throw new CustomError(ERROR_MESSAGE.invalidOrder);
    }
  }

  validateEachOrderedMenuItem(orderedMenuItems, name, quantity) {
    this.#validateOrderedItemsAreNotDuplicated(orderedMenuItems, name);
    this.#validateOrderedQuantityPerItem(quantity);
  }

  validateOrderedMenuItems(orderedMenuItems) {
    this.#validateOrderedItemExists(orderedMenuItems);
    this.#validateTotalOrderedQuantity(orderedMenuItems);
    this.#validateOrderedItemsAreNotBeveragesOnly(orderedMenuItems);
  }

  #validateOrderedItemsAreNotDuplicated(orderedMenuItems, name) {
    if (orderedMenuItems[name]) {
      throw new CustomError(ERROR_MESSAGE.invalidOrder);
    }
  }

  #validateOrderedQuantityPerItem(quantity) {
    if (parseInt(quantity) < SETTING.minOrderQuantity) {
      throw new CustomError(ERROR_MESSAGE.invalidOrder);
    }
  }

  #validateOrderedItemExists(orderedMenuItems) {
    Object.keys(orderedMenuItems).forEach((menuName) => {
      if (!this.#menu.isItemExists(menuName)) {
        throw new CustomError(ERROR_MESSAGE.invalidOrder);
      }
    });
  }

  #validateTotalOrderedQuantity(orderedMenuItems) {
    const totalOrderedQuantity = Object.values(orderedMenuItems).reduce(
      (totalOrderedQuantity, quantity) => totalOrderedQuantity + quantity,
    );
    if (totalOrderedQuantity > SETTING.maxOrderQuantity) {
      throw new CustomError(ERROR_MESSAGE.exceededOrderQuantity);
    }
  }

  #validateOrderedItemsAreNotBeveragesOnly(orderedMenuItems) {
    if (this.#menu.isAllItemsInGivenCategory(Object.keys(orderedMenuItems), MENU_CATEGORY.beverage)) {
      throw new CustomError(ERROR_MESSAGE.notAllowedBeverageOnly);
    }
  }
}

export default OrderValidator;
