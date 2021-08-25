import { createClient } from 'microcms-js-sdk';

const API_KEY = process.env.API_KEY ? process.env.API_KEY : '';

export const client = createClient({
  serviceDomain: 'mino',
  apiKey: API_KEY,
});
