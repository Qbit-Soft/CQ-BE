import type { Application, Request, Response } from 'express';
import type { ModelMethods } from './model'

type MethodsOptions = {
  find?: boolean;
  create?: boolean;
  update?: boolean;
  remove?: boolean;
}

export default function route(app: Application, model: ModelMethods<any>, path: string) {
  const crudMethods = {
    find: async (req: Request, res: Response) => {
      try {
        const result = await model.find(req.query);

        res.json({result: result, errors: []})
      } catch (error) {
        res.status(500).json({result: [], errors: [error]})
      }
    },
    create: async (req: Request, res: Response) => {
      try {
        const result = await model.create(req.body);

        res.json({result: result, errors: []})
      } catch (error) {
        res.status(500).json({result: [], errors: [error]})
      }
    },
    update: async (req: Request, res: Response) => {
      try {
        const result = await model.update(req.body);

        res.json({result: result, errors: []})
      } catch (error) {
        res.status(500).json({result: [], errors: [error]})
      }
    },
    remove: async (req: Request, res: Response) => {
      try {
        const result = await model.remove(req.query);

        res.json({result: result, errors: []})
      } catch (error) {
        res.status(500).json({result: [], errors: [error]})
      }
    }
  }

  return {
    activate(methods: MethodsOptions) {
      if (methods.find) {
        app.get(path, crudMethods.find);
      }
    
      if (methods.create) {
        app.post(path, crudMethods.create);
      }
    
      if (methods.update) {
        app.put(path, crudMethods.update);
      }
    
      if (methods.remove) {
        app.delete(path, crudMethods.remove);
      }
    },
    model: model,
    crudMethods: crudMethods
  }
}
