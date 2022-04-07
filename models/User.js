const mongoose = require('mongoose')

// Think of this as a factory that can create new User documents in a User collection
const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
})

module.exports = mongoose.model('User', UserSchema)
