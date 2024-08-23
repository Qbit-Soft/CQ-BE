import express from 'express';
import userRoutes from './routes/usersRoutes';  // Asegúrate de ajustar la ruta según la estructura de tu proyecto
import ordenCompraRoutes from './routes/purchaseOrdersRoutes';  // Asegúrate de ajustar la ruta según la estructura de tu proyecto

const app = express();

async function startServer() {

  app.use(express.json());

  app.use('/api/users', userRoutes);
  app.use('/orden-compra', ordenCompraRoutes);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
