const OUTPUT_MESSAGE = Object.freeze({
  intro: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  previewIntro: (reservedDate) => `12월 ${reservedDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  orderedMenuHeader: '\n<주문 메뉴>',
  totalAmountWithoutDiscountHeader: '\n<할인 전 총주문 금액>',
  freeMenuItemHeader: '\n<증정 메뉴>',
  discountListHeader: '\n<혜택 내역>',
  totalDiscountedAmountHeader: '\n<총혜택 금액>',
  totalExpectedAmountHeader: '\n<할인 후 예상 결제 금액>',
  eventBadgeHeader: '\n<12월 이벤트 배지>',
  suffixToQuantity: '개',
  suffixToAmount: '원',
});

export default OUTPUT_MESSAGE;
