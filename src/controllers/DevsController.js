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

  index() {
    try {
      const devs = {
        0: {
          id: 1,
          name: 'dev1',
        },
        1: {
          id: 2,
          name: 'dev2',
        },
      };

      this.response = devs;

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

export default DevsController;
