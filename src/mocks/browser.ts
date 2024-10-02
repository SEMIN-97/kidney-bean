import { setupWorker } from 'msw/browser';

import { authHandler } from './authHandler.ts';

export const worker = setupWorker(...authHandler);
