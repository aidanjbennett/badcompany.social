import express from 'express';
import { port } from './utils/constants.js';

const app = new express();

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
