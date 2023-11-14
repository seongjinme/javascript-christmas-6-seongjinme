import Order from '../src/model/Order.js';
import ERROR_MESSAGE from '../src/constant/ErrorMessage.js';

describe('주문 메뉴 입력값 검증 테스트', () => {
  test('입력값이 비어 있는 경우 예외가 발생한다.', () => {
    expect(() => {
      new Order('');
    }).toThrow(ERROR_MESSAGE.prefix);
  });

  test.each([
    ['해산물파스타-2,레드와인-1,초코케이크-'],
    [',,해산물파스타-2'],
    ['타파스 - 2, 시저샐러드 - 3'],
    ['바비큐립--2,아이스크림-1'],
    ['크리스마스파스타-1,샴페인-2,'],
    ['시저샐러드-a'],
  ])('메뉴 형식이 예시(해산물파스타-2,레드와인-1,초코케이크-1)와 다른 경우 예외가 발생한다.', (input) => {
    expect(() => {
      new Order(input);
    }).toThrow(ERROR_MESSAGE.prefix);
  });

  test.each([['타파스-1,타파스-2'], ['레드와인-1,티본스테이크-1,티본스테이크-1,아이스크림-3']])(
    '입력된 메뉴명에 중복이 있을 경우 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Order(input);
      }).toThrow(ERROR_MESSAGE.prefix);
    },
  );

  test.each([['레드와인-0,크리스마스파스타-2'], ['티본스테이크-1,양송이수프-0,아이스크림-2']])(
    '입력된 메뉴 중 수량이 1 미만인 경우가 있다면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Order(input);
      }).toThrow(ERROR_MESSAGE.prefix);
    },
  );

  test.each([['화이트와인-3'], ['양송이수프-2,햄버거-3,제로콜라-3']])(
    '존재하지 않는 메뉴를 주문하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Order(input);
      }).toThrow(ERROR_MESSAGE.prefix);
    },
  );

  test.each([['타파스-21'], ['양송이수프-10,바비큐립-5,초코케이크-1,제로콜라-5']])(
    '주문한 전체 메뉴 수가 20개를 초과하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Order(input);
      }).toThrow(ERROR_MESSAGE.prefix);
    },
  );

  test.each([['레드와인-1'], ['제로콜라-3,샴페인-2']])('주문한 메뉴가 음료 뿐이라면 예외가 발생한다.', (input) => {
    expect(() => {
      new Order(input);
    }).toThrow(ERROR_MESSAGE.prefix);
  });
});
