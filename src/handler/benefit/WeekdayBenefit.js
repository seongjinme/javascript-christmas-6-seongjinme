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
      SETTING.weekdayEventDayPeriod.includes(this.reservedDate.getDay()) &&
      Order.getInstance().getOrderedQuantityByCategory(this.#category) > 0
    ) {
      return true;
    }
    return false;
  }

  getBenefit() {
    const benefitAppliedQuantity = Order.getInstance().getOrderedQuantityByCategory(this.#category);
    return {
      name: BENEFIT_NAME.weekdayBenefit,
      amount: SETTING.weekdayEventDiscountPerItem * benefitAppliedQuantity,
    };
  }
}

export default WeekdayBenefit;
