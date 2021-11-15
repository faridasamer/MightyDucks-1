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
        type: String //encrypted

    },
    Type:{
        type: String,
        length: 1,
        enum : ['N','A'],
        default: 'N'
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