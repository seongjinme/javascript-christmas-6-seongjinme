import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import InputValidator from '../validator/InputValidator.js';

class EventPlanningController {
  async runPlanning() {
    OutputView.printWelcomeMessage();
    await this.#getReservedDate();
  }

  async #getReservedDate() {
    try {
      const dateNumber = await InputView.readDate();
      InputValidator.validateInputDateNumber(dateNumber);
      return dateNumber;
    } catch (error) {
      OutputView.printMessage(error.message);
      return await this.#getReservedDate();
    }
  }
}

export default EventPlanningController;
