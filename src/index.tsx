import { Hono } from 'hono';
import { OgImage } from './OgImage';
import { generateImage } from './getImage';

const app = new Hono();

app.get('/', async (c) => {
	const { req } = c;
	const message = req.query('message');
	const img = await generateImage(<OgImage message={message} />);
	const cashSeconds = 604800;
	c.header('Cache-Control', `max-age=${cashSeconds}`);
	return c.body(img);
});

export default app;
