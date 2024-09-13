import type { Application } from 'express';
import route from '../core/route';
import usersModel from '../models/users.model.js';

export default (app: Application) => {
  const usersRoute = route(app, usersModel, '/users');

  usersRoute.activate({
    find: true,
    create: true,
    update: true,
    remove: true
  })
}