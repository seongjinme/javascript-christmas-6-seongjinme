import SETTING from '../constant/Setting.js';
import EVENT_BADGE from '../constant/EventBadge.js';

class EventBadgeHeader {
  #totalBenefitAmount;
  #eventBadges;

  constructor(benefits) {
    this.#totalBenefitAmount = Object.values(benefits).reduce((total, benefitAmount) => {
      return total + benefitAmount;
    }, 0);
    this.#eventBadges = EVENT_BADGE;
  }

  getEventBadge() {
    if (this.#totalBenefitAmount >= SETTING.benefitAmountToGetSantaBadge) {
      return this.#eventBadges.santa;
    }
    if (this.#totalBenefitAmount >= SETTING.benefitAmountToGetTreeBadge) {
      return this.#eventBadges.tree;
    }
    if (this.#totalBenefitAmount >= SETTING.benefitAmountToGetStarBadge) {
      return this.#eventBadges.star;
    }
    return this.#eventBadges.none;
  }
}

export default EventBadgeHeader;
