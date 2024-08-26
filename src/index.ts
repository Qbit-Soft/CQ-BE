import express from 'express';
import db from './config/db';
import invoicesRoute from './routes/invoices.route';
import productsRoute from './routes/products.route';
import transportersRoute from './routes/transporters.route';
import usersRoute from './routes/users.route';

const PORT = process.env.PORT || 3000;
const app = express();

async function startServer() {
  app.use(express.json());
  // --------------------- Load middleware here ---------------------

  // --------------------- Load routes here -------------------------
  invoicesRoute(app);
  productsRoute(app);
  transportersRoute(app);
  usersRoute(app);
  // ----------------------------------------------------------------

  await db.connect();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
