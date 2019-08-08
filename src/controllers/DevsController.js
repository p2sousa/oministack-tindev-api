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

  async create(data) {
    const { username } = data;
    const devExist = await Dev.findOne({ username });

    if (devExist) {
      return defaultResponse(devExist);
    }

    const responseApi = await axios.get(`${this.endpointGitHub}${username}`);
    const { responseData } = responseApi.data;

    const dev = await Dev.create({
      username: responseData.username,
      name: responseData.name,
      bio: responseData.bio,
      avatar: responseData.avatar_url,
    });

    return defaultResponse(dev, HttpStatus.CREATED);
  }
}

export default DevsController;
