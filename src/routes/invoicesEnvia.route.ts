import type { Application } from 'express';
import route from '../core/route.js';
import invoicesModel from '../models/invoicesEnvia.model';

export default (app: Application) => {
  const invoicesRoute = route(app, invoicesModel, '/invoices-envia');

  invoicesRoute.activate({
    find: true,
    create: true,
    update: true,
    remove: true
  })
}