import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import dateNumberValidator from '../validator/DateNumberValidator.js';
import Order from '../model/Order.js';
import BenefitHandler from '../handler/BenefitHandler.js';
import EventBadgeHandler from '../handler/EventBadgeHandler.js';
import PlanningResultHandler from '../handler/PlanningResultHandler.js';

class EventPlanningController {
  async runPlanning() {
    OutputView.printWelcomeMessage();

    const reservedDate = await this.#getReservedDate();
    const order = await this.#getOrder();

    OutputView.printPlanningResultPreviewMessage(reservedDate);

    const benefits = this.#getBenefits(reservedDate, order);
    const eventBadge = this.#getEventBadge(benefits);
    const planningResult = this.#getPlanningResult(order, benefits, eventBadge);

    OutputView.printPlanningResult(planningResult);
  }

  #getBenefits(reservedDate, order) {
    const benefitHandler = new BenefitHandler(reservedDate, order);
    return benefitHandler.getBenefits();
  }

  #getEventBadge(benefits) {
    const eventBadgeHandler = new EventBadgeHandler(benefits);
    return eventBadgeHandler.getEventBadge();
  }

  #getPlanningResult(order, benefits, eventBadge) {
    const planningResultHandler = new PlanningResultHandler(order, benefits, eventBadge);
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

  async #getOrder() {
    try {
      const orderInput = await InputView.readOrder();
      return new Order(orderInput);
    } catch (error) {
      OutputView.printMessage(error.message);
      return await this.#getOrder();
    }
  }
}

export default EventPlanningController;
