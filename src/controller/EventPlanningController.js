import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import dateNumberValidator from '../validator/DateNumberValidator.js';
import Menu from '../model/Menu.js';
import Order from '../model/Order.js';
import BenefitHandler from '../handler/BenefitHandler.js';
import EventBadgeHandler from '../handler/EventBadgeHandler.js';
import PlanningResultHandler from '../handler/PlanningResultHandler.js';

class EventPlanningController {
  constructor() {
    new Menu();
  }

  async runPlanning() {
    OutputView.printWelcomeMessage();

    const reservedDateNumber = await this.#getReservedDate();
    await this.#getOrder(reservedDateNumber);

    OutputView.printPlanningResultPreviewMessage(reservedDateNumber);

    const benefits = this.#getBenefits();
    const eventBadge = this.#getEventBadge(benefits);
    const planningResult = this.#getPlanningResult(benefits, eventBadge);

    OutputView.printPlanningResult(planningResult);

    this.#resetAllModelInstances();
  }

  #getBenefits() {
    const benefitHandler = new BenefitHandler();
    return benefitHandler.getBenefits();
  }

  #getEventBadge(benefits) {
    const eventBadgeHandler = new EventBadgeHandler(benefits);
    return eventBadgeHandler.getEventBadge();
  }

  #getPlanningResult(benefits, eventBadge) {
    const planningResultHandler = new PlanningResultHandler(benefits, eventBadge);
    return planningResultHandler.getPlanningResult();
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

  async #getOrder(reservedDateNumber) {
    try {
      const orderInput = await InputView.readOrder();
      return new Order(reservedDateNumber, orderInput);
    } catch (error) {
      OutputView.printMessage(error.message);
      return await this.#getOrder();
    }
  }

  #resetAllModelInstances() {
    Menu.resetInstance();
    Order.resetInstance();
  }
}

export default EventPlanningController;
