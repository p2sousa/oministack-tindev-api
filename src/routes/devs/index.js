import DevController from '../../controllers/DevsController';

export default (router) => {
  router.post('/devs', async (req, res) => {
    const Dev = new DevController();
    const response = await Dev.list();
    
    res.status(response.statusCode);
    res.json(response.data);
  });
};
