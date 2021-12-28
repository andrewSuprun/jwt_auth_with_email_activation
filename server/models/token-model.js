const {Schema, model, SchemaTypes} = require('mongoose')

const TokenSchema = new Schema({
  user: {type: SchemaTypes.ObjectId, ref: 'User'},
  activationLink: { type: String, required: true},
})

module.exports = model('Token', TokenSchema)