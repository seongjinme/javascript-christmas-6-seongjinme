import ERROR_MESSAGE from '../constant/ErrorMessage.js';
import SETTING from '../constant/Setting.js';
import CustomError from '../error/CustomError.js';

function dateNumberValidator(dateNumber) {
  if (isNaN(dateNumber)) {
    throw new CustomError(ERROR_MESSAGE.invalidDateNumber);
  }

  if (dateNumber.toString().charAt(0) === '0') {
    throw new CustomError(ERROR_MESSAGE.invalidDateNumber);
  }

  if (!Number.isInteger(Number(dateNumber))) {
    throw new CustomError(ERROR_MESSAGE.invalidDateNumber);
  }

  if (parseInt(dateNumber) < SETTING.eventMinDateNumber || parseInt(dateNumber) > SETTING.eventMaxDateNumber) {
    throw new CustomError(ERROR_MESSAGE.invalidDateNumber);
  }
}

export default dateNumberValidator;
