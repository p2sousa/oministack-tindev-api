import HttpStatus from 'http-status';

// defines a response pattern
const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

// defines a response error pattern
const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class DislikesController {
  constructor(Dislike) {
    this.Dislike = Dislike;
  }

  index() {
    this.response = {};
    try {
      return defaultResponse(this.response);
    } catch (error) {
      return errorResponse(error);
    }
  }

  create(data) {
    this.response = data;
    return defaultResponse(this.response);
  }
}

export default DislikesController;
