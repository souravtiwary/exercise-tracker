const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema ({
    username: {type: String, required: true},
    description : {type: String, required: true},
    duration : {type: String, required: true},
    date : {type: Date, required: true}
}, {
    timestamps: true
})

//Exercise document will get created in DB
const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise