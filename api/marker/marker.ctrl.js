const MarkerModel = require("../../models/marker.js");
//const mongoose = require("mongoose");

const create = (req, res) => {
    const {
        title,
        text,
        tag,
        lat,
        lng,
    } = req.body;
    if (!text || !title) return res.status(400).send("필수값 미입력");
    MarkerModel.create({
        title,
        text,
        tag,
        lat,
        lng,
    }, (err, result) => {

        if (err) return res.status(500).send("등록 오류 발생");
        res.status(201).json(result);

    });
};
const list = (req, res) => {
    const {
        tag
    } = req.body;

    MarkerModel.find({
        "tag": tag
    }, (err, result) => {
        if (err) return res.status(500);
        res.json(result);
    })

};

const detail = (req, res) => {
    const {
        lat,
        lng
    } = req.body;
    MarkerModel.findOne({
        "lat": lat,
        "lng": lng,
    }, (err, result) => {
        if (err) return res.status(500);
        //console.log(result);
        res.json(result);
    })
}


module.exports = {
    create,
    list,
    detail,
};