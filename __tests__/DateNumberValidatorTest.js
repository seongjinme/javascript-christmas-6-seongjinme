import dateNumberValidator from '../src/validator/DateNumberValidator.js';
import ERROR_MESSAGE from '../src/constant/ErrorMessage.js';

describe('예상 방문 날짜 입력값 검증 테스트', () => {
  test('입력값에 숫자가 아닌 문자가 포함된 경우 예외가 발생한다.', () => {
    expect(() => {
      dateNumberValidator('1a');
    }).toThrow(ERROR_MESSAGE.prefix);
  });

  test('입력값 앞에 0이 포함된 경우 예외가 발생한다.', () => {
    expect(() => {
      dateNumberValidator('03');
    }).toThrow(ERROR_MESSAGE.prefix);
  });

  test('입력값에 소수점이 포함된 경우 예외가 발생한다.', () => {
    expect(() => {
      dateNumberValidator('2.8');
    }).toThrow(ERROR_MESSAGE.prefix);
  });

  test.each([['0'], ['32']])('입력값이 1-31 사이의 숫자가 아닌 경우 예외가 발생한다.', (input) => {
    expect(() => {
      dateNumberValidator(input);
    }).toThrow(ERROR_MESSAGE.prefix);
  });
});
