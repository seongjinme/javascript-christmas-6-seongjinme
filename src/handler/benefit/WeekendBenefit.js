import BENEFIT_NAME from '../../constant/BenefitName.js';
import MENU_CATEGORY from '../../constant/MenuCategory.js';
import SETTING from '../../constant/Setting.js';
import Benefit from './interface/Benefit.js';
import Order from '../../model/Order.js';

class WeekendBenefit extends Benefit {
  #category;

  constructor() {
    super();
    this.#category = MENU_CATEGORY.main;
  }

  isValid() {
    if (
      this.startDate <= this.reservedDate &&
      this.reservedDate <= this.endDate &&
      SETTING.weekendEventDayPeriod.includes(this.reservedDate.getDay())
    ) {
      return true;
    }
    return false;
  }

  applyBenefit(benefits) {
    const benefitAppliedQuantity = Order.getInstance().getOrderedQuantityByCategory(this.#category);
    if (benefitAppliedQuantity === 0) {
      return benefits;
    }

    const benefitAmount = SETTING.weekendEventDiscountPerItem * benefitAppliedQuantity;
    benefits[BENEFIT_NAME.weekendBenefit] = benefitAmount;
    return benefits;
  }
}

export default WeekendBenefit;
