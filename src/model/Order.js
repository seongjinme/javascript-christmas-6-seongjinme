import Menu from './Menu.js';
import OrderValidator from '../validator/OrderValidator.js';

class Order {
  #orderedMenuItems;

  constructor(orderInput) {
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

  getOrderedQuantityByCategory(category) {
    const menu = new Menu();
    const orderedQuantityByCategory = Object.entries(this.#orderedMenuItems).reduce((count, [menuName, quantity]) => {
      if (menu.isItemInGivenCategory(menuName, category)) {
        return count + quantity;
      }
      return count;
    }, 0);

    return orderedQuantityByCategory;
  }

  getTotalOrderedAmount() {
    const menu = new Menu();
    const totalOrderedAmount = Object.entries(this.#orderedMenuItems).reduce((amount, [menuName, quantity]) => {
      return amount + menu.getItemPrice(menuName) * quantity;
    }, 0);

    return totalOrderedAmount;
  }

  getTotalOrderedMenuItems() {
    return Object.entries(this.#orderedMenuItems);
  }
}

export default Order;
