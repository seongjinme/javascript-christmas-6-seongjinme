import deepFreeze from '../util/DeepFreeze.js';
import MENU_CATEGORY from './MenuCategory.js';

const MENU_ITEM = {
  양송이수프: {
    price: 6_000,
    category: `${MENU_CATEGORY.appitizer}`,
  },
  타파스: {
    price: 5_500,
    category: `${MENU_CATEGORY.appitizer}`,
  },
  시저샐러드: {
    price: 8_000,
    category: `${MENU_CATEGORY.appitizer}`,
  },
  티본스테이크: {
    price: 55_000,
    category: `${MENU_CATEGORY.main}`,
  },
  바비큐립: {
    price: 54_000,
    category: `${MENU_CATEGORY.main}`,
  },
  해산물파스타: {
    price: 35_000,
    category: `${MENU_CATEGORY.main}`,
  },
  크리스마스파스타: {
    price: 25_000,
    category: `${MENU_CATEGORY.main}`,
  },
  초코케이크: {
    price: 15_000,
    category: `${MENU_CATEGORY.dessert}`,
  },
  아이스크림: {
    price: 5_000,
    category: `${MENU_CATEGORY.dessert}`,
  },
  제로콜라: {
    price: 3_000,
    category: `${MENU_CATEGORY.beverage}`,
  },
  레드와인: {
    price: 60_000,
    category: `${MENU_CATEGORY.beverage}`,
  },
  샴페인: {
    price: 25_000,
    category: `${MENU_CATEGORY.beverage}`,
  },
};

deepFreeze(MENU_ITEM);

export default MENU_ITEM;
