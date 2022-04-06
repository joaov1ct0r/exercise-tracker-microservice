import mongoose from 'mongoose';

const dbConnection = () => {
    mongoose.connect(
        process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        error => {
            if (error) throw error;
            else console.log('Conectado a DB!');
        }
    );
};

export default dbConnection;
