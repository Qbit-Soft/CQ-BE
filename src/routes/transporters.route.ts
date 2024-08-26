import type { Application } from 'express';
import route from '../core/route';
import transportersModel from '../models/transporters.model.js';

export default (app: Application) => {
  const transportersRoute = route(app, transportersModel, '/transporters');

  transportersRoute.activate({
    find: true,
    create: true,
    update: true,
    remove: true
  })
}