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

  applyBenefit(benefits) {
    return benefits;
  }
}

export default Benefit;
