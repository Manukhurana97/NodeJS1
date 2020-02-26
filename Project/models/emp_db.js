const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: String,
    email: String,
    Phone: Number
});

module.exports =  mongoose.model("Employee", employeeSchema);
