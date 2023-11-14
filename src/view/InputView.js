import { Console } from '@woowacourse/mission-utils';
import INPUT_MESSAGE from '../constant/InputMessage.js';

const InputView = {
  async readDateNumber() {
    const date = await Console.readLineAsync(INPUT_MESSAGE.inputDate);
    return date.trim();
  },

  async readOrder() {
    const order = await Console.readLineAsync(INPUT_MESSAGE.inputMenu);
    return order.trim();
  },
};

export default InputView;
