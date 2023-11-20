import BENEFIT_NAME from '../../constant/BenefitName.js';
import MENU_CATEGORY from '../../constant/MenuCategory.js';
import SETTING from '../../constant/Setting.js';
import Benefit from './interface/Benefit.js';
import Order from '../../model/Order.js';

class WeekdayBenefit extends Benefit {
  #category;

  constructor() {
    super();
    this.#category = MENU_CATEGORY.dessert;
  }

  isValid() {
    if (
      this.startDate <= this.reservedDate &&
      this.reservedDate <= this.endDate &&
      SETTING.weekdayEventDayPeriod.includes(this.reservedDate.getDay())
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

    const benefitAmount = SETTING.weekdayEventDiscountPerItem * benefitAppliedQuantity;
    benefits[BENEFIT_NAME.weekdayBenefit] = benefitAmount;
    return benefits;
  }
}

export default WeekdayBenefit;
