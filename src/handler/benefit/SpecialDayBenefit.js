import BENEFIT_NAME from '../../constant/BenefitName.js';
import SETTING from '../../constant/Setting.js';
import Benefit from './interface/Benefit.js';

class SpecialDayBenefit extends Benefit {
  constructor() {
    super();
  }

  isValid() {
    if (
      this.startDate <= this.reservedDate &&
      this.reservedDate <= this.endDate &&
      SETTING.specialEventDayPeriod.includes(this.reservedDate.getDate())
    ) {
      return true;
    }
    return false;
  }

  getBenefit() {
    return {
      name: BENEFIT_NAME.specialDayBenefit,
      amount: SETTING.specialEventDiscountAmount,
    };
  }
}

export default SpecialDayBenefit;
