import MENU_CATEGORY from './MenuCategory.js';

const MENU_ITEM = Object.freeze({
  mushroomSoup: {
    name: '양송이수프',
    price: 6_000,
    category: `${MENU_CATEGORY.appitizer}`,
  },
  tapas: {
    name: '타파스',
    price: 5_500,
    category: `${MENU_CATEGORY.appitizer}`,
  },
  caesarSalad: {
    name: '시저샐러드',
    price: 8_000,
    category: `${MENU_CATEGORY.appitizer}`,
  },
  tBoneSteak: {
    name: '티본스테이크',
    price: 55_000,
    category: `${MENU_CATEGORY.main}`,
  },
  barbecueRibs: {
    name: '바비큐립',
    price: 54_000,
    category: `${MENU_CATEGORY.main}`,
  },
  seafoodPasta: {
    name: '해산물파스타',
    price: 35_000,
    category: `${MENU_CATEGORY.main}`,
  },
  christmasPasta: {
    name: '해산물파스타',
    price: 25_000,
    category: `${MENU_CATEGORY.main}`,
  },
  chocoCake: {
    name: '초코케이크',
    price: 15_000,
    category: `${MENU_CATEGORY.dessert}`,
  },
  icecream: {
    name: '아이스크림',
    price: 5_000,
    category: `${MENU_CATEGORY.dessert}`,
  },
  cokeZero: {
    name: '제로콜라',
    price: 3_000,
    category: `${MENU_CATEGORY.beverage}`,
  },
  redWine: {
    name: '레드와인',
    price: 60_000,
    category: `${MENU_CATEGORY.beverage}`,
  },
  champagne: {
    name: '샴페인',
    price: 25_000,
    category: `${MENU_CATEGORY.beverage}`,
  },
});

export default MENU_ITEM;
