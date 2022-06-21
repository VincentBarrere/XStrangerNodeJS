const EventModel = require("../models/event.model");
const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readEvent = (req, res) => {
  EventModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
};

module.exports.createEvent = async (req, res) => {
  const newEvent = new EventModel({
    creatorId: req.body.creatorId,
    description: req.body.description,
    dateEvent: req.body.dateEvent,
    adressEvent: req.body.adressEvent,
    registers: [],
    category: req.body.category,
  });

  try {
    const event = await newEvent.save();
    return res.status(201).json(event);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updateEvent = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  const updateRecord = {
    description: req.body.description,
    dateEvent: req.body.dateEvent,
    adressEvent: req.body.adressEvent,
    category: req.body.category,
  };

  EventModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
};

module.exports.deleteEvent = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  EventModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};
