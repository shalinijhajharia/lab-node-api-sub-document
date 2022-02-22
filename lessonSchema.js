const mongoose = require('mongoose')

var lessonSchema = new mongoose.Schema(
    { name: String,
        id: Number,
    },
    {collection:"users"}
)
const Lesson = mongoose.model('Lesson',lessonSchema)
module.exports = {Lesson}
