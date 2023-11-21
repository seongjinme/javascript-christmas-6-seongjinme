import SETTING from '../../../constant/Setting.js';
import Order from '../../../model/Order.js';

class Benefit {
  constructor() {
    this.startDate = SETTING.eventStartDate;
    this.endDate = SETTING.eventEndDate;
    this.reservedDate = Order.getInstance().getReservedDate();
  }

  isValid() {
    if (this.startDate <= this.reservedDate && this.reservedDate <= this.endDate) {
      return true;
    }
    return false;
  }

  getBenefit() {
    return { name: '', amount: 0 };
  }

  applyBenefit(benefits) {
    const benefit = this.getBenefit();

    if (this.isValidBenefitFormat(benefit)) {
      benefits[`${benefit.name}`] = benefit.amount;
    }

    return benefits;
  }

  isValidBenefitFormat(benefit) {
    const allowedFields = ['name', 'amount'];

    return (
      typeof benefit === 'object' &&
      benefit !== null &&
      Object.keys(benefit).every((field) => allowedFields.includes(field)) &&
      typeof benefit.name === 'string' &&
      typeof benefit.amount === 'number'
    );
  }
}

export default Benefit;
