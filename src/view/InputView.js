import { Console } from '@woowacourse/mission-utils';
import INPUT_MESSAGE from '../constant/InputMessage.js';

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(INPUT_MESSAGE.inputDate);
    return date.trim();
  },
};

export default InputView;
