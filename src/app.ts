import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';

import indexRouter from './routes/index';
import serviceRouter from './routes/services.route';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/services', serviceRouter);

export default app;
