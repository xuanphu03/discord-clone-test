import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');

app.get('/sign-in', (c) => c.json({ token: '124' }));
app.get('/sign-up', (c) => c.json({ token: '124' }));

export default handle(app);
