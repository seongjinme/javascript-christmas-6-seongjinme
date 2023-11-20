import Menu from './Menu.js';
import OrderValidator from '../validator/OrderValidator.js';
import CustomError from '../error/CustomError.js';
import ERROR_MESSAGE from '../constant/ErrorMessage.js';
import SETTING from '../constant/Setting.js';

class Order {
  #reservedDate;
  #orderedMenuItems;

  constructor(reservedDateNumber, orderInput) {
    if (Order.instance) {
      return Order.instance;
    }

    this.#reservedDate = new Date(SETTING.eventYear, SETTING.eventMonth, reservedDateNumber);
    this.#orderedMenuItems = this.#addMenuItems(orderInput);
    Order.instance = this;
  }

  static getInstance() {
    if (!Order.instance) {
      throw new CustomError(ERROR_MESSAGE.orderNotExists);
    }
    return Order.instance;
  }

  static resetInstance() {
    if (Order.instance) {
      Order.instance = null;
    }
  }

  #addMenuItems(orderInput) {
    OrderValidator.validateOrderFormat(orderInput);
    const orderedMenuItems = this.#convertOrderInputToObject(orderInput);
    return orderedMenuItems;
  }

  #convertOrderInputToObject(orderInput) {
    // const orderValidator = new OrderValidator();
    const orderedMenuItems = {};

    orderInput.split(',').map((orderedItem) => {
      const [name, quantity] = orderedItem.split('-');
      OrderValidator.validateEachOrderedMenuItem(orderedMenuItems, name, quantity);
      orderedMenuItems[name] = parseInt(quantity);
    });

    OrderValidator.validateOrderedMenuItems(orderedMenuItems);
    return orderedMenuItems;
  }

  getOrderedQuantityByCategory(category) {
    const menu = Menu.getInstance();
    const orderedQuantityByCategory = Object.entries(this.#orderedMenuItems).reduce((count, [menuName, quantity]) => {
      if (menu.isItemInGivenCategory(menuName, category)) {
        return count + quantity;
      }
      return count;
    }, 0);

    return orderedQuantityByCategory;
  }

  getTotalOrderedAmount() {
    const menu = Menu.getInstance();
    const totalOrderedAmount = Object.entries(this.#orderedMenuItems).reduce((amount, [menuName, quantity]) => {
      return amount + menu.getItemPrice(menuName) * quantity;
    }, 0);

    return totalOrderedAmount;
  }

  getReservedDate() {
    return this.#reservedDate;
  }

  getTotalOrderedMenuItems() {
    return Object.entries(this.#orderedMenuItems);
  }
}

export default Order;
