import BENEFIT_NAME from '../../constant/BenefitName.js';
import SETTING from '../../constant/Setting.js';
import Benefit from './interface/Benefit.js';

class ChristmasDDayBenefit extends Benefit {
  // #startDate;
  // #endDate;
  #dDayStartDate;
  #dDayEndDate;
  #reservedDate;

  constructor(reservedDate) {
    super();
    this.#dDayStartDate = SETTING.dDayEventStartDate;
    this.#dDayEndDate = SETTING.dDayEventEndDate;
    this.#reservedDate = reservedDate;
  }

  isValid(reservedDate) {
    if (this.#dDayStartDate <= reservedDate && reservedDate <= this.#dDayEndDate) {
      return true;
    }
    return false;
  }

  applyBenefit(benefits) {
    const dateDiff = this.#getDateDiff(this.#reservedDate, this.#dDayStartDate);
    const benefitAmount = SETTING.dDayEventDiscountStartAmount + SETTING.dDayEventDiscountPerDayAmount * dateDiff;
    benefits[BENEFIT_NAME.christmasDDayBenefit] = -benefitAmount;

    return benefits;
  }

  #getDateDiff(reservedDate, dDayStartDate) {
    // 두 Date 객체의 시간차를 밀리초 단위로 계산한 뒤, 이를 다시 일 단위로 환산한다.
    return parseInt((reservedDate.getTime() - dDayStartDate.getTime()) / (1000 * 60 * 60 * 24));
  }
}

export default ChristmasDDayBenefit;
