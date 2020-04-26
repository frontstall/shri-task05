import { builds1, builds2 } from './fixtures';

const createFakeApi = () => ({
  getBuilds: jest.fn()
    .mockResolvedValueOnce({ data: builds1 })
    .mockResolvedValueOnce({ data: builds2 }),

  startBuild: jest.fn(),

  finishBuild: jest.fn(),
});

export default createFakeApi;
