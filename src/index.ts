import express, { Express, Request, Response } from 'express';

import dotenv from 'dotenv';

import getLocation from './routes/getLocation.js';

dotenv.config();
const app: Express = express();
const PORT = process.env.PORT;

app.use('/', getLocation);

app.get('/', (req: Request, res: Response) => {
	res.json({
		message: '😭😭😭😭😭😭😭😭😭😭😭',
	}).status(200);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
