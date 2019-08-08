import DevsController from '../../../src/controllers/DevsController';

describe('Controllers: Devs', () => {
  describe('Get all devs: index()', () => {
    it('should return a list of devs', () => {
      const expectedResponse = {
        0: {
          id: 1,
          name: 'dev1',
        },
        1: {
          id: 2,
          name: 'dev2',
        },
      };

      const devsController = new DevsController();
      const response = devsController.index();
      expect(response.data).to.be.eql(expectedResponse);
    });
  });
});
