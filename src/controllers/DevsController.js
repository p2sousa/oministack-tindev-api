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

class DevsController {
  constructor(Devs) {
    this.Devs = Devs;
  }

  list() {
    console.log('teste');
  }
}

export default DevsController;
