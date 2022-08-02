export default class InternalError extends Error {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);

    this.message = message;

    this.statusCode = statusCode;
  }
}
