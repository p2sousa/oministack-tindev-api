import HttpStatus from 'http-status';
import axios from 'axios';
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

class DevsController {
  constructor() {
    this.endpointGitHub = 'https://api.github.com/users/';
  }

  async index(req) {
    try {
      const { user } = req.headers;
      const loggedDev = await Dev.findById(user);

      const users = await Dev.find({
        $and: [
          { _id: { $ne: user } },
          { _id: { $nin: loggedDev.likes } },
          { _id: { $nin: loggedDev.dislikes } },
        ],
      });

      return defaultResponse(users);
    } catch (error) {
      return errorResponse(error);
    }
  }

  async create(req) {
    const { username } = req.body;
    const devExist = await Dev.findOne({ username });

    if (devExist) {
      return defaultResponse(devExist);
    }

    const responseApi = await axios.get(`${this.endpointGitHub}${username}`);
    const { data: response } = await responseApi;

    const dev = await Dev.create({
      username: response.login,
      name: response.name,
      bio: response.bio,
      avatar: response.avatar_url,
    });

    return defaultResponse(dev, HttpStatus.CREATED);
  }
}

export default DevsController;
