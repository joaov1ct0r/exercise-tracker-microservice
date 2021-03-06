import mongoose from 'mongoose';

const { Schema } = mongoose;

const exercisesSchema = new Schema({
    userId: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, min: 1, required: true },
    date: { type: Date, default: Date.now }
});

const Exercises = mongoose.model('Exercises', exercisesSchema);

export default Exercises;
