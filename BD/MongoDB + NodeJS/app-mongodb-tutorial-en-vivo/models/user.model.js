const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModelShema = new Schema({
    name: { // Vamos a tener un campo llamado nombre
        type: String, // de tipo String
        required: [true, 'Name is required'], // Es obligatorio
        minlength: [3, 'Name must be at least 3 characteres long' ], // Tamaño minimo del nombre
        maxlength: [50, 'Name must be at most 50 characteres long'], // Tamaño máximo del nombre 
        trim: true // Que borre los espacios iniciales, finales e intermedios

    },
    lastName: { // Vamos a tener un campo llamado nombre
        type: String, // de tipo String
        required: [true, 'Name is required'], // Es obligatorio
        minlength: [3, 'Name must be at least 3 characteres long'], // Tamaño minimo del nombre
        maxlength: [50, 'Name must be at most 50 characteres long'], // Tamaño máximo del nombre 
        trim: true // Que borre los espacios iniciales, finales e intermedios

    },
    email: {
        type: String,
        required: [true, 'Email is requerid'],
        unique: [true, 'Email must be unique'],
        trim: true
    },
    phones: [{ // Este es un ejemplo de objetos  
        type: String,
        trim: true
    }]

});

const userModel = mongoose.model('User', userModelShema);
module.exports = userModel;