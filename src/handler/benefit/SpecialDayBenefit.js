import BENEFIT_NAME from '../../constant/BenefitName.js';
import SETTING from '../../constant/Setting.js';
import Benefit from './interface/Benefit.js';

class SpecialDayBenefit extends Benefit {
  constructor() {
    super();
  }

  isValid(reservedDate) {
    if (
      this.startDate <= reservedDate &&
      reservedDate <= this.endDate &&
      SETTING.specialEventDayPeriod.includes(reservedDate.getDate())
    ) {
      return true;
    }
    return false;
  }

  applyBenefit(benefits) {
    benefits[BENEFIT_NAME.specialDayBenefit] = SETTING.specialEventDiscountAmount;
    return benefits;
  }
}

export default SpecialDayBenefit;
