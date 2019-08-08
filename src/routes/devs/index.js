import DevsController from '../../controllers/DevsController';
import LikesController from '../../controllers/LikesController';
import DislikesController from '../../controllers/DislikesController';

export default (router) => {
  router.get('/devs', async (req, res) => {
    const DevController = new DevsController();
    const response = await DevController.index(req);

    res.status(response.statusCode);
    res.json(response.data);
  });

  router.post('/devs', async (req, res) => {
    const DevController = new DevsController();
    const response = await DevController.create(req);

    res.status(response.statusCode);
    res.json(response.data);
  });

  router.post('/devs/:devId/likes', async (req, res) => {
    const LikeController = new LikesController();
    const response = await LikeController.create(req);

    res.status(response.statusCode);
    res.json(response.data);
  });

  router.post('/devs/:devId/dislikes', async (req, res) => {
    const DislikeController = new DislikesController();
    const response = await DislikeController.create(req);

    res.status(response.statusCode);
    res.json(response.data);
  });
};
