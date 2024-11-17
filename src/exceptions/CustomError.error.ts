export class CustomError extends Error {
  statusCode: number;
  description: string | object;

  constructor(
    message: string,
    statusCode: number,
    description?: string | object,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.description = description || 'no description';
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  toJSON() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      description: this.description,
    };
  }
}
