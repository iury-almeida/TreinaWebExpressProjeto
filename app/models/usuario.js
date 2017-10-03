let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        name: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true
        }
    });
    
    return mongoose.model('Usuario', schema, 'usuarios');

}