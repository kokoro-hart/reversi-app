import express from 'express';
import morgan from 'morgan';
import 'express-async-errors';

const PORT = 3000;

const app = express();

app.use(morgan('dev'));

app.get('/api/hello', async (_, res) => {
  res.json({
    message: 'Hello Express',
  });
});

app.get('/api/error', async (_, res) => {
  throw new Error('Error');
});

app.listen(PORT, () => {
  console.log('test', PORT);
});

app.use(errorHandler);

type ErrorResponseBody = {
  type: string;
  message: string;
};

function errorHandler(
  err: any,
  _req: express.Request,
  res: express.Response<ErrorResponseBody>,
  _next: express.NextFunction
) {
  console.error('Unexpected error occurred', err);
  res.status(500).json({
    type: 'UnecpectedError',
    message: 'Unexpected error occurred',
  });
}
