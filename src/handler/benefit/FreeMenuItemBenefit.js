import BENEFIT_NAME from '../../constant/BenefitName.js';
import SETTING from '../../constant/Setting.js';
import Benefit from './interface/Benefit.js';

class FreeMenuItemBenefit extends Benefit {
  #order;
  #freeMenuItem;

  constructor(order, freeMenuItem) {
    super();
    this.#order = order;
    this.#freeMenuItem = freeMenuItem;
  }

  isValid(reservedDate) {
    if (
      this.startDate <= reservedDate &&
      reservedDate <= this.endDate &&
      this.#order.getTotalOrderedAmount() >= SETTING.orderAmountToGetFreeItem
    ) {
      return true;
    }
    return false;
  }

  applyBenefit(benefits) {
    benefits[BENEFIT_NAME.freeMenuItemBenefit] = -this.#freeMenuItem.price;
    return benefits;
  }
}

export default FreeMenuItemBenefit;
