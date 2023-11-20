import BENEFIT_NAME from '../../constant/BenefitName.js';
import SETTING from '../../constant/Setting.js';
import Benefit from './interface/Benefit.js';

class ChristmasDDayBenefit extends Benefit {
  #dDayStartDate;
  #dDayEndDate;

  constructor() {
    super();
    this.#dDayStartDate = SETTING.dDayEventStartDate;
    this.#dDayEndDate = SETTING.dDayEventEndDate;
  }

  isValid() {
    if (this.#dDayStartDate <= this.reservedDate && this.reservedDate <= this.#dDayEndDate) {
      return true;
    }
    return false;
  }

  applyBenefit(benefits) {
    const dateDiff = this.#getDateDiff(this.reservedDate, this.#dDayStartDate);
    const benefitAmount = SETTING.dDayEventDiscountStartAmount + SETTING.dDayEventDiscountPerDayAmount * dateDiff;
    benefits[BENEFIT_NAME.christmasDDayBenefit] = benefitAmount;

    return benefits;
  }

  #getDateDiff(reservedDate, dDayStartDate) {
    return parseInt((reservedDate.getTime() - dDayStartDate.getTime()) / (1000 * 60 * 60 * 24));
  }
}

export default ChristmasDDayBenefit;
