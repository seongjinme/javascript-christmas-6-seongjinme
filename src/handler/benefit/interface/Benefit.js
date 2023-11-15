import SETTING from '../../../constant/Setting.js';

class Benefit {
  constructor() {
    this.startDate = SETTING.eventStartDate;
    this.endDate = SETTING.eventEndDate;
  }

  isValid(reservedDate) {
    if (this.startDate <= reservedDate && reservedDate <= this.endDate) {
      return true;
    }
    return false;
  }

  applyBenefit(benefits) {
    return benefits;
  }
}

export default Benefit;
