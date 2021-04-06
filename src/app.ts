import express from 'express';

export const app = express();

app.set('PORT', process.env['PORT'] || '3000');

app
	.use(express.json())
	.use(express.urlencoded({ extended: false }));

app
	.get('/', (req, res, next) => {
		res.send('nodejs-vscode-debug');
	});

app
	.use((req, res, next) => {
		console.error('NotFound');
		res.sendStatus(404);
	})
	.use(((err, req, res, next) => {
		console.error(err);
		res.sendStatus(500);
	}) as express.ErrorRequestHandler);