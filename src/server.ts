import { app } from './app';

const port = Number.parseInt(app.get('PORT'));
const server = app.listen(port);

server.on('listening', () => {
	console.log('listen...', port);
});

process.once('SIGTERM', () => {
	server.close();
});
process.once('SIGINT', () => {
	process.emit('SIGTERM', 'SIGTERM');
});
