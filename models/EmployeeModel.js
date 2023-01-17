import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    signupDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

export default mongoose.model('Employee', EmployeeSchema);