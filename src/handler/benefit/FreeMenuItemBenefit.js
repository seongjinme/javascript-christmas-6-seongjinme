import BENEFIT_NAME from '../../constant/BenefitName.js';
import SETTING from '../../constant/Setting.js';
import Benefit from './interface/Benefit.js';
import Menu from '../../model/Menu.js';
import Order from '../../model/Order.js';

class FreeMenuItemBenefit extends Benefit {
  #freeMenuItem;
  #freeMenuItemQuantity;

  constructor() {
    super();
    this.#freeMenuItem = Menu.getInstance().getItemDetail([SETTING.freeEventMenuItem]);
    this.#freeMenuItemQuantity = SETTING.freeEventMenuItemQuantity;
  }

  isValid() {
    if (
      this.startDate <= this.reservedDate &&
      this.reservedDate <= this.endDate &&
      Order.getInstance().getTotalOrderedAmount() >= SETTING.orderAmountToGetFreeItem
    ) {
      return true;
    }
    return false;
  }

  applyBenefit(benefits) {
    benefits[BENEFIT_NAME.freeMenuItemBenefit] = this.#freeMenuItem.price * this.#freeMenuItemQuantity;
    return benefits;
  }
}

export default FreeMenuItemBenefit;
