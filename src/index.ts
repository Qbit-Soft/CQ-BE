import express from 'express';

import examplesRouter from './services/examples';

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/api/example', examplesRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

/* 
import express from 'express';
import connectDB from './config/db';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/transportadoras', require('./routes/transportadoraRoutes'));
app.use('/api/facturas', require('./routes/facturaRoutes'));
app.use('/api/ordenes_compra', require('./routes/ordenCompraRoutes'));
app.use('/api/productos', require('./routes/productoRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

*/