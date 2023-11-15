import ChristmasDDayBenefit from './benefit/ChristmasDDayBenefit.js';
import WeekdayBenefit from './benefit/WeekdayBenefit.js';
import WeekendBenefit from './benefit/WeekendBenefit.js';
import SpecialDayBenefit from './benefit/SpecialDayBenefit.js';
import FreeMenuItemBenefit from './benefit/FreeMenuItemBenefit.js';
import MENU_CATEGORY from '../constant/MenuCategory.js';
import MENU_ITEM from '../constant/MenuItem.js';
import SETTING from '../constant/Setting.js';

class BenefitHandler {
  #reservedDate;
  #order;
  #benefitItems;

  constructor(reservedDate, order) {
    this.#reservedDate = new Date(SETTING.eventYear, SETTING.eventMonth, reservedDate);
    this.#order = order;
    this.#benefitItems = this.#createBenefits();
  }

  #createBenefits() {
    const benefitItems = [
      new ChristmasDDayBenefit(this.#reservedDate),
      new WeekdayBenefit(this.#order, MENU_CATEGORY.dessert),
      new WeekendBenefit(this.#order, MENU_CATEGORY.main),
      new SpecialDayBenefit(),
      new FreeMenuItemBenefit(this.#order, MENU_ITEM['샴페인']),
    ];
    return benefitItems;
  }

  getBenefits() {
    let benefits = {};
    const totalOrderedAmount = this.#order.getTotalOrderedAmount();
    if (totalOrderedAmount < SETTING.minOrderAmountForEvent) {
      return benefits;
    }

    this.#benefitItems.forEach((benefitItem) => {
      if (benefitItem.isValid(this.#reservedDate)) {
        benefits = benefitItem.applyBenefit(benefits);
      }
    });

    return benefits;
  }
}

export default BenefitHandler;
