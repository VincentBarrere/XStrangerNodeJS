const mongoose = require("mongoose");

const addressEventSchema = new mongoose.Schema({
  number: String,
  street: String,
  city: String,
});

const eventSchema = new mongoose.Schema(
  {
    creatorId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      maxLenght: 500,
    },
    dateEvent: {
      type: Date,
      required: true,
      default: Date.now,
    },
    adressEvent: {
      type: addressEventSchema,
      required: true,
    },
    registers: {
      type: [
        {
          registeredId: String,
          registeredPseudo: String,
          timespamp: Number,
        },
      ],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timespamps: true,
  }
);

const EventModel = mongoose.model("event", eventSchema);

module.exports = EventModel;
