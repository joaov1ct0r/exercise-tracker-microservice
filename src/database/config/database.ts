import mongoose from "mongoose";

const dbConnection: Function = (): void => {
  mongoose.connect(process.env.MONGO_URI as string, (error) => {
    if (error) throw error;
    else console.log("Conectado a DB!");
  });
};

export default dbConnection;
