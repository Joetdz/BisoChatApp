const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    password: String,
    profil: String,
}, { timestamps: true })

userSchema.plugin(uniqueValidator)
const User = mongoose.model('User', userSchema)

module.exports = { User }
