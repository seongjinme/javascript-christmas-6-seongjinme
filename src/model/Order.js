import SETTING from '../constant/Setting.js';
import OrderValidator from '../validator/OrderValidator.js';

class Order {
  #reservedDate;
  #orderedMenuItems;

  constructor(reservedDate, orderInput) {
    this.#reservedDate = new Date(SETTING.eventYear, SETTING.eventMonth, reservedDate);
    this.#orderedMenuItems = this.#addMenuItems(orderInput);
  }

  #addMenuItems(orderInput) {
    OrderValidator.validateOrderFormat(orderInput);
    const orderedMenuItems = this.#convertOrderInputToObject(orderInput);
    return orderedMenuItems;
  }

  #convertOrderInputToObject(orderInput) {
    const orderValidator = new OrderValidator();
    const orderedMenuItems = {};

    orderInput.split(',').map((orderedItem) => {
      const [name, quantity] = orderedItem.split('-');
      orderValidator.validateEachOrderedMenuItem(orderedMenuItems, name, quantity);
      orderedMenuItems[name] = parseInt(quantity);
    });

    orderValidator.validateOrderedMenuItems(orderedMenuItems);
    return orderedMenuItems;
  }
}

export default Order;
