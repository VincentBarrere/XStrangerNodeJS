const EventModel = require("../models/event.model");
const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readEvent = (req, res) => {};

module.exports.createEvent = (req, res) => {
  const newEvent = new eventModel({
    creatorId: req.body.creatorId,
    description: req.body.description,
    dateEvent: req.body.dateEvent,
    adressEvent: req.body.adressEvent,
    registers: [],
    category: req.body.category,
  });

  try {
    const event= await newEvent.save();
    return res.status(201).json(event)
  } catch (err) {
    return res.status(400).send(err)
  }
};

module.exports.updateEvent = (req, res) => {};

module.exports.deleteEvent = (req, res) => {};
