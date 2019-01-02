const mongoose = require('mongoose')
const schema = {
    id :  {type: Number, required: true},
    name: { type: String, required: true },
    presenter: {type: String, required: true},
    broadcastTime: {start: {type:Number, required: true},
                    end: {type:Number, required: true}}

}
const show_schema = new mongoose.Schema(schema);

const Show=mongoose.model('Show', show_schema);

module.exports = Show