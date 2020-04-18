import * as storageApi from './api/storageApi';
import initServer from './server';
import Queue from './queue';
import { build } from './utils';
import statuses from './config';

const port = 3001;
const queue = new Queue(storageApi, build, statuses);

initServer(port, queue);
