import dotenv from 'dotenv';
import * as storageApi from './api/storageApi';
import initServer from './server';
import { Queue, builder } from './utils';

import statuses from './config';

dotenv.config();

const port = 3001;
const queue = new Queue(storageApi, builder, statuses);

initServer(port, queue);
