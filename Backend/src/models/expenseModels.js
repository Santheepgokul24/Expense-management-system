const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
    {   
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true,
            index : true
        },
        date : {
            type : Date,
            required : true,
            index : true
        },
        title : {
            type : String,
            trim : true,
            required : true
        },
        amount : {
            type : Number,
            min : 0,
            required : true
        },
        type : {
            type : String,
            enum : ["Expense", "Income"],
            required : true,
            index : true
        },
        category : {
            type : String,
            required : true,
            trim : true,
            index : true
        }
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model('Expense', expenseSchema);