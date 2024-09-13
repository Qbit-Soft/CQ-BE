import type { Application } from 'express';
import route from '../core/route';
import invoicesModel from '../models/TemplatesInvoicesSend.model';

export default (app: Application) => {
  const invoicesRoute = route(app, invoicesModel, '/templates-nvoices');

  invoicesRoute.activate({
    find: true,
    create: true,
    update: true,
    remove: true
  })
}