import mongoose from "mongoose";

export type MongooseConnectionCache = {
  connectionDB: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseCache: MongooseConnectionCache | undefined;
}
