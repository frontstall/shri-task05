import Queue from '..';
import builder from '../../builder';
import statuses from '../../../config';
import createFakeApi from './fakeApi';
import { sortedBuilds } from './fixtures';

describe('queue', () => {
  let queue;
  beforeEach(() => {
    const api = createFakeApi();
    queue = new Queue(api, builder, statuses);
  });

  it('queue created with default params', () => {
    expect(queue.state).toBe('idle');
    expect(queue.currentBuild).toBeNull();
    expect(queue.builds).toEqual([]);
  });

  it('builds are placed to queue', async () => {
    await queue.getBuilds();
    expect(queue.builds).toEqual(sortedBuilds);
    await queue.getBuilds();
    expect(queue.builds).toEqual(sortedBuilds);
  });
});
