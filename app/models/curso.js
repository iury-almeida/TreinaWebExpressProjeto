let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        nome: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        categoria: {
            type: String,
            required: true
        }

    })
    return mongoose.model('Curso', schema, 'cursos');
}