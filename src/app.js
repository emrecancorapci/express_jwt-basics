import Express from 'express';
import 'express-async-errors';

import notFoundHandler from './middleware/not-found.js';
import errorHandler from './middleware/error-handler.js';
import mainRouter from './routes/main.js';

const app = Express();

app.use(Express.static('./public'));
app.use(Express.json());

app.use('/api/v1', mainRouter);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
