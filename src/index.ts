import express from 'express';
import examplesRouter from './services/examples';
import axios from 'axios';
import cron from 'node-cron';

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/api/example', examplesRouter);

// Función para consultar la API externa
async function fetchApiData() {
  try {
    const response = await axios.get('URL_DE_LA_API'); // Reemplaza 'URL_DE_LA_API' con la URL de la API que deseas consultar
    const data = response.data;

    // Procesa la información recibida
    console.log('Datos recibidos:', data);

    // Aquí puedes agregar el procesamiento de los datos según tus necesidades
  } catch (error) {
    console.error('Error al consultar la API:', error);
  }
}

// Programar el job para que se ejecute con cierta frecuencia (por ejemplo, cada minuto)
cron.schedule('* * * * *', fetchApiData); // Cambia el cronograma según tus necesidades

console.log('Job programado para consultar la API cada minuto.');

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
