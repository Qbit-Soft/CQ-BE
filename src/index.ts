import express from 'express';

import examplesRouter from './services/examples';

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/api/example', examplesRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});