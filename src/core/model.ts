import { Model, Document } from 'mongoose';

export interface ModelMethods<T extends Document> {
  find(query?: Record<string, any>): Promise<Record<string, any>[]>;
  update(changes?: Record<string, any>): Promise<T | null>;
  create(data?: Record<string, any>): Promise<T>;
  remove(query?: Record<string, any>): Promise<T | null>;
}

export default function model<T extends Document>(model: Model<any>): ModelMethods<T> {
  return {
    async create(data) {
      const document = new model(data);
      return await document.save();
    },

    async find (query = {}) {
      return await model.find(query).lean().exec();
    },

    async update(changes = {}) {
      return await model.findOneAndUpdate({ _id: changes._id }, changes, { new: true }).exec();
    },

    async remove(query = {}) {
      return await model.findOneAndDelete(query).exec();
    }
  };
}