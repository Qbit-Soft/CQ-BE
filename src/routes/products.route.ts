import type { Application } from 'express';
import route from '../core/route';
import productsModel from '../models/products.model';

export default (app: Application) => {
  const productsRoute = route(app, productsModel, '/products');

  productsRoute.activate({
    find: true,
    create: true,
    update: true,
    remove: true
  })
}