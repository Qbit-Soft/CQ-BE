// src/job.js
const axios = require('axios');
const cron = require('node-cron');

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
