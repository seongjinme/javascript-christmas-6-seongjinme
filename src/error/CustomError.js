class CustomError extends Error {
  static PREFIX = '[ERROR]';

  constructor(errorMessage) {
    super(`\n${CustomError.PREFIX} ${errorMessage}\n`);
  }
}

export default CustomError;
