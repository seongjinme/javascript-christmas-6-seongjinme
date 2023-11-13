const SETTING = Object.freeze({
  eventStartDate: new Date(2023, 11, 1),
  eventEndDate: new Date(2023, 11, 31),
  dDayEventStartDate: new Date(2023, 11, 1),
  dDayEventEndDate: new Date(2023, 11, 25),
  dDayEventDiscountStartAmount: 1_000,
  dDayEventDiscountPerDayAmount: 100,
  weekdayEventDayPeriod: [0, 4],
  weekdayEventDiscountPerItem: 2_023,
  weekendEventDayPeriod: [5, 6],
  weekendEventDiscountPerItem: 2_023,
  specialEventDate: [3, 10, 17, 24, 25, 31],
  orderAmountToGetFreeItem: 120_000,
  discountAmountToGetStarBadge: 5_000,
  discountAmountToGetTreeBadge: 10_000,
  discountAmountToGetSantaBadge: 20_000,
  minOrderAmountForEvent: 10_000,
  maxOrderQuantity: 20,
  minDateNumber: 1,
  maxDateNumber: 31,
});

export default SETTING;
