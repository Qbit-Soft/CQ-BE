import { Router } from 'express';

const router = Router();

router.use('/users', require('./userRoutes'));
router.use('/transportadoras', require('./transportadoraRoutes'));
router.use('/facturas', require('./facturaRoutes'));
router.use('/ordenes_compra', require('./ordenCompraRoutes'));
router.use('/productos', require('./productoRoutes'));

export default router;
