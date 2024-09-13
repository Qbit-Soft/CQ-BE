import type { Application } from 'express';
import route from '../core/route.js';
import invoicesModel from '../models/conveyorTemplates.model';

export default (app: Application) => {
  const invoicesRoute = route(app, invoicesModel, '/conveyor-templates');

  invoicesRoute.activate({
    find: true,
    create: true,
    update: true,
    remove: true
  })
}