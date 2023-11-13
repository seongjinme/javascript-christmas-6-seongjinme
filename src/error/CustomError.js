import ERROR_MESSAGE from '../constant/ErrorMessage.js';

class CustomError extends Error {
  static PREFIX = ERROR_MESSAGE.prefix;

  constructor(errorMessage) {
    super(`\n${CustomError.PREFIX} ${errorMessage}\n`);
  }
}

export default CustomError;
