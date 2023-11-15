import { Console } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGE from '../constant/OutputMessage.js';

const OutputView = {
  printWelcomeMessage() {
    Console.print(OUTPUT_MESSAGE.welcome);
  },

  printPlanningResultPreviewMessage(reservedDate) {
    Console.print(OUTPUT_MESSAGE.benefitPreviewMessage(reservedDate));
  },

  printOrderedMenu(orderedMenu) {
    Console.print(OUTPUT_MESSAGE.orderedMenuHeader);
    orderedMenu.forEach((orderedItem) => {
      Console.print(orderedItem);
    });
  },

  printTotalAmountWithoutBenefit(totalAmountWithoutBenefit) {
    Console.print(OUTPUT_MESSAGE.totalAmountWithoutBenefitHeader);
    Console.print(totalAmountWithoutBenefit);
  },

  printFreeMenuItem(freeMenuItem) {
    Console.print(OUTPUT_MESSAGE.freeMenuItemHeader);
    Console.print(freeMenuItem);
  },

  printBenefits(benefits) {
    Console.print(OUTPUT_MESSAGE.benefitsHeader);
    benefits.forEach((benefit) => {
      Console.print(benefit);
    });
  },

  printTotalBenefitAmount(totalBenefitAmount) {
    Console.print(OUTPUT_MESSAGE.totalBenefitAmountHeader);
    Console.print(totalBenefitAmount);
  },

  printTotalExpectedAmount(totalExpectedAmount) {
    Console.print(OUTPUT_MESSAGE.totalExpectedAmountHeader);
    Console.print(totalExpectedAmount);
  },

  printEventBadge(eventBadge) {
    Console.print(OUTPUT_MESSAGE.eventBadgeHeader);
    Console.print(eventBadge);
  },

  printPlanningResult(planningResult) {
    this.printOrderedMenu(planningResult.orderedMenu);
    this.printTotalAmountWithoutBenefit(planningResult.totalAmountWithoutBenefit);
    this.printFreeMenuItem(planningResult.freeMenuItem);
    this.printBenefits(planningResult.benefits);
    this.printTotalBenefitAmount(planningResult.totalBenefitAmount);
    this.printTotalExpectedAmount(planningResult.totalExpectedAmount);
    this.printEventBadge(planningResult.eventBadge);
  },

  printMessage(message) {
    Console.print(message);
  },
};

export default OutputView;
