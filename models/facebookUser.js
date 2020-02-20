const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
mongoose.promise = Promise

// Define userSchema
const facebookUserSchema = new Schema({
	name: { type: String, unique: false, required: true },
	provider: { type: String, unique: false, required: true },
	userId: { type: Number, unique: true, required: true }
});

// Define schema methods
facebookUserSchema.methods = {
	checkId: function (userId) {
		return bcrypt.compareSync(userId, this.userId)
	},
	hashId: plainTextId => {
		return bcrypt.hashSync(plainTextId, 10)
	}
};

// Define hooks for pre-saving
facebookUserSchema.pre('save', function (next) {
	if (!this.userId) {
		console.log('models/user.js =======NO USERID PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashId in pre save');
		
		this.userId = this.hashId(this.userId)
		next()
	}
});

const FacebookUser = mongoose.model('FacebookUser', facebookUserSchema)
module.exports = FacebookUser