const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        userName : {
            type : String,
            minlength : 2,
            required : true,
            trim : true
        },
        dob : {
            type : Date
        },
        password : {
            type : String,
            required : true,
            minlength : 8,
            select : false // IMPORTANT for security
        },
        email : {
            type : String,
            requied : true,
            unique : true,
            trim : true,
            index : true,
            lowercase : true
        }
    },
    {
        timestamps : true
    }
);

// Hash password before saving
userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// compare password during login
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

