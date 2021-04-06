let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Stormtrooper Model
let StormtrooperSchema = require("../models/Stormtrooper");

//Create Stormtrooper
router.route("/create-stormtrooper").post((req, res, next) => {
  StormtrooperSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//Read Stormtrooper
router.route("/").get((req, res) => {
  StormtrooperSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//Get Single Stormtrooper
router.route("/edit-stormtrooper/:id").get((req, res) => {
  StormtrooperSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//Update Stormtrooper
router.route("/update-stormtrooper/:id").put((req, res, next) => {
  StormtrooperSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Stormtrooper successfully updated");
      }
    }
  );
});

//Delete Stormtrooper
router.route("/delete-stormtrooper/:id").delete((req, res, next) => {
  StormtrooperSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ msg: data });
    }
  });
});

module.exports = router;
