import type { Application } from 'express';
import route from '../core/route';
import invoicesModel from '../models/invoices.model.js';

export default (app: Application) => {
  const invoicesRoute = route(app, invoicesModel, '/invoices');

  invoicesRoute.activate({
    find: true,
    create: true,
    update: true,
    remove: true
  })
}