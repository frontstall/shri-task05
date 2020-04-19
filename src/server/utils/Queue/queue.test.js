import Queue from '.';
import builder from '../builder';
import statuses from '../../config';

describe('queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue(api, builder, statuses);
  });
});
