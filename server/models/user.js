import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    Email: { 
        type: String,
        unique: true
    },
    Username: { 
        type: String,
        unique: true
    },
    homeAddress: String,

    coutryCode:{
        type:String,
        length: 3
    },
    passportNumber: { 
        type: String,
        unique: true
    },
    Password:{
        type: String //SHOULD BE ENCRYPTED

    },
    Type:{
        type: String,
        length: 1 //N for NOrmal, A for Admin
    },
    firstName: String,
    lastName: String,

    dateOfBirth: {
        type:Date
    },
    flightNumbers: {
        type:Array
    },
});

var user = mongoose.model('user', userSchema);

export default user;