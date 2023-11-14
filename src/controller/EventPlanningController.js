import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import dateNumberValidator from '../validator/DateNumberValidator.js';
import Order from '../model/Order.js';

class EventPlanningController {
  async runPlanning() {
    OutputView.printWelcomeMessage();

    const reservedDate = await this.#getReservedDate();
    const order = await this.#getOrder(reservedDate);
  }

  async #getReservedDate() {
    try {
      const dateNumber = await InputView.readDateNumber();
      dateNumberValidator(dateNumber);
      return parseInt(dateNumber);
    } catch (error) {
      OutputView.printMessage(error.message);
      return await this.#getReservedDate();
    }
  }

  async #getOrder(reservedDate) {
    try {
      const orderInput = await InputView.readOrder();
      return new Order(reservedDate, orderInput);
    } catch (error) {
      OutputView.printMessage(error.message);
      return await this.#getOrder();
    }
  }
}

export default EventPlanningController;
