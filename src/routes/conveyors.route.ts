import type { Application } from 'express';
import route from '../core/route';
import invoicesModel from '../models/conveyors.model';

export default (app: Application) => {
  const invoicesRoute = route(app, invoicesModel, '/conveyors');

  invoicesRoute.activate({
    find: true,
    create: true,
    update: true,
    remove: true
  })
}