import express from 'express';
import userRoutes from './routes/userRoutes';  // Asegúrate de ajustar la ruta según la estructura de tu proyecto
import ordenCompraRoutes from './routes/ordenCompraRoutes';  // Asegúrate de ajustar la ruta según la estructura de tu proyecto

const app = express();

async function startServer() {
  app.use('/api/user', userRoutes);
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
