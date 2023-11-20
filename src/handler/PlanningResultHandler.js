import BENEFIT_NAME from '../constant/BenefitName.js';
import OUTPUT_MESSAGE from '../constant/OutputMessage.js';
import SETTING from '../constant/Setting.js';
import Order from '../model/Order.js';

class PlanningResultHandler {
  #order;
  #benefits;
  #eventBadge;

  constructor(benefits, eventBadge) {
    this.#order = Order.getInstance();
    this.#benefits = benefits;
    this.#eventBadge = eventBadge;
  }

  getPlanningResult() {
    const planningResult = {
      orderedMenu: this.#getOrderedMenu(),
      totalAmountWithoutBenefit: this.#getTotalAmountWithoutBenefit(),
      freeMenuItem: this.#getFreeMenuItem(),
      benefits: this.#getBenefits(),
      totalBenefitAmount: this.#getTotalBenefitAmount(),
      totalExpectedAmount: this.#getTotalExpectedAmount(),
      eventBadge: this.#eventBadge,
    };
    return planningResult;
  }

  #getOrderedMenu() {
    const orderedItems = this.#order.getTotalOrderedMenuItems();
    return orderedItems.map(([menuItem, quantity]) => `${menuItem} ${quantity}${OUTPUT_MESSAGE.suffixToQuantity}`);
  }

  #getTotalAmountWithoutBenefit() {
    return this.#convertNumberToFormattedDecimal(this.#order.getTotalOrderedAmount());
  }

  #getFreeMenuItem() {
    if (Object.keys(this.#benefits).includes(BENEFIT_NAME.freeMenuItemBenefit)) {
      return `${SETTING.freeEventMenuItem} ${SETTING.freeEventMenuItemQuantity}${OUTPUT_MESSAGE.suffixToQuantity}`;
    }
    return OUTPUT_MESSAGE.nothingToOffer;
  }

  #getBenefits() {
    const benefitList = Object.entries(this.#benefits);
    if (benefitList.length === 0) {
      return [OUTPUT_MESSAGE.nothingToOffer];
    }
    return benefitList.map(([benefitItem, benefitAmount]) => {
      const benefitAmountFormatted = this.#convertNumberToFormattedDecimal(-benefitAmount);
      return `${benefitItem}: ${benefitAmountFormatted}`;
    });
  }

  #getTotalBenefitAmount() {
    const amountNumber = Object.values(this.#benefits).reduce((total, benefitAmount) => total + benefitAmount, 0);
    if (amountNumber === 0) {
      return `${amountNumber}${OUTPUT_MESSAGE.suffixToAmount}`;
    }
    return this.#convertNumberToFormattedDecimal(-amountNumber);
  }

  #getTotalExpectedAmount() {
    const totalBenefitAmountWithoutFreeItem = Object.entries(this.#benefits)
      .filter(([benefitItem]) => benefitItem !== BENEFIT_NAME.freeMenuItemBenefit)
      .reduce((total, [_, benefitAmount]) => total + benefitAmount, 0);
    const totalExpectedAmountNumber = this.#order.getTotalOrderedAmount() - totalBenefitAmountWithoutFreeItem;
    return this.#convertNumberToFormattedDecimal(totalExpectedAmountNumber);
  }

  #convertNumberToFormattedDecimal(number) {
    let formattedDecimal = new Intl.NumberFormat('ko-KR', {
      style: 'decimal',
    }).format(number);
    return (formattedDecimal += OUTPUT_MESSAGE.suffixToAmount);
  }
}

export default PlanningResultHandler;
