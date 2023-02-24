import Express, { json } from 'express';
import 'express-async-errors';

import notFoundHandler from './middleware/not-found';
import errorHandler from './middleware/error-handler';

const app = Express();

app.use(Express.static('./public'));
app.use(json());

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
