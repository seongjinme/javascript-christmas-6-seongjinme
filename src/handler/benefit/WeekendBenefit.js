import BENEFIT_NAME from '../../constant/BenefitName.js';
import SETTING from '../../constant/Setting.js';
import Benefit from './interface/Benefit.js';

class WeekendBenefit extends Benefit {
  #order;
  #category;

  constructor(order, category) {
    super();
    this.#order = order;
    this.#category = category;
  }

  isValid(reservedDate) {
    if (
      this.startDate <= reservedDate &&
      reservedDate <= this.endDate &&
      SETTING.weekendEventDayPeriod.includes(reservedDate.getDay())
    ) {
      return true;
    }
    return false;
  }

  applyBenefit(benefits) {
    const benefitAppliedQuantity = this.#order.getOrderedQuantityByCategory(this.#category);
    if (benefitAppliedQuantity === 0) {
      return benefits;
    }

    const benefitAmount = SETTING.weekendEventDiscountPerItem * benefitAppliedQuantity;
    benefits[BENEFIT_NAME.weekendBenefit] = benefitAmount;
    return benefits;
  }
}

export default WeekendBenefit;
