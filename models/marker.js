const mongoose = require("mongoose");

const MarkerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    tag: {
        type: String,
        required: true,
        trim: true
    },
    lat: {
        type: String,
        required: true,
        trim: true
    },
    lng: {
        type: String,
        required: true,
        trim: true
    },


});



module.exports = mongoose.model("Marker", MarkerSchema);

//export default model;