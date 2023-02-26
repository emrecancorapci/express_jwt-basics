import { StatusCodes } from 'http-status-codes';

import CustomAPIError from './custom-error.js';

export default class Unauthenticated extends CustomAPIError {
  constructor(message) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}
