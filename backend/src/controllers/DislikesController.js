import HttpStatus from 'http-status';
import Dev from '../models/Dev';

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

  async create(req) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return errorResponse({ error: 'Dev not exists' });
    }

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save();

    return defaultResponse(loggedDev);
  }
}

export default DislikesController;
