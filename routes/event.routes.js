const router = require("express").Router();
const eventController = require("../controllers/event.controller.js");

//router.get("/", eventController.readEvents);
router.get("/", eventController.readEvent);
router.post("/", eventController.createEvent);
router.put("/:id", eventController.updateEvent);
router.delete("/:id", eventController.deleteEvent);
router.patch("/registration/:id", eventController.registration);
router.patch("/deregistration/:id", eventController.deregistration);

module.exports = router;
