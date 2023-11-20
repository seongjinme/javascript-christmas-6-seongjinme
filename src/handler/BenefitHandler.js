import Order from '../model/Order.js';
import ChristmasDDayBenefit from './benefit/ChristmasDDayBenefit.js';
import WeekdayBenefit from './benefit/WeekdayBenefit.js';
import WeekendBenefit from './benefit/WeekendBenefit.js';
import SpecialDayBenefit from './benefit/SpecialDayBenefit.js';
import FreeMenuItemBenefit from './benefit/FreeMenuItemBenefit.js';
import SETTING from '../constant/Setting.js';

class BenefitHandler {
  #benefitItems;

  constructor() {
    this.#benefitItems = this.#createBenefits();
  }

  #createBenefits() {
    const benefitItems = [
      new ChristmasDDayBenefit(),
      new WeekdayBenefit(),
      new WeekendBenefit(),
      new SpecialDayBenefit(),
      new FreeMenuItemBenefit(),
    ];
    return benefitItems;
  }

  getBenefits() {
    let benefits = {};

    if (!this.#isMetConditionToApplyBenefit()) {
      return benefits;
    }

    this.#benefitItems.forEach((benefitItem) => {
      if (benefitItem.isValid()) {
        benefits = benefitItem.applyBenefit(benefits);
      }
    });

    return benefits;
  }

  #isMetConditionToApplyBenefit() {
    const totalOrderedAmount = Order.getInstance().getTotalOrderedAmount();
    if (totalOrderedAmount < SETTING.minOrderAmountForEvent) {
      return false;
    }
    return true;
  }
}

export default BenefitHandler;
