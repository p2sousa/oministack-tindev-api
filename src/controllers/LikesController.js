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

class LikesController {
  constructor(Like) {
    this.Like = Like;
  }

  index() {
    return defaultResponse({});  
  }
  
  create(data) {
    return defaultResponse(data);
  }
}

export default LikesController;
