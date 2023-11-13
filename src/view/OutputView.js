import { Console } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGE from '../constant/OutputMessage.js';

const OutputView = {
  printWelcomeMessage() {
    Console.print(OUTPUT_MESSAGE.welcome);
  },

  printMenu() {
    Console.print('<주문 메뉴>');
  },

  printMessage(message) {
    Console.print(message);
  },
};

export default OutputView;
