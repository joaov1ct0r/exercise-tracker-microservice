import Exercises from "../database/models/exercisesModel.js";

import User from "../database/models/userModel.js";

const handleNewUser = (req, res) => {
  const username = req.body.username;
  let _id = "";

  User.findOne({ username }, (err, data) => {
    if (!err && data === null) {
      const newUser = new User({
        username,
      });

      newUser.save((error, data) => {
        if (error) throw error;
        else {
          _id = data._id;

          return res.json({ username, _id });
        }
      });
    } else {
      return res.json({ error: "Usuario ja cadastrado!" });
    }
  });
};

const handleNewExercise = (req, res) => {
  if (req.params._id === undefined) {
    return res.json({ error: "_id não encontrado!" });
  }

  if (req.body.description === undefined) {
    return res.json({ error: "description não encontrado!" });
  }

  if (req.body.duration === undefined) {
    return res.json({ error: "duration não encontrado!" });
  }

  const userId = req.params._id;

  const description = req.body.description;

  const duration = req.body.duration;

  const date =
    req.body.date !== undefined ? new Date(req.body.date) : new Date();

  User.findById(userId, (err, data) => {
    if (!err && data !== null) {
      const newExercise = new Exercises({
        userId,
        description,
        duration,
        date,
      });

      newExercise.save((error, data2) => {
        if (error) throw error;
        else {
          return res.json({
            username: data.username,
            _id: data._id,
            description: data2.description,
            duration: Number(data2.duration),
            date: data2.date.toDateString(),
          });
        }
      });
    } else {
      return res.json({ error: "Usuario não encontrado" });
    }
  });
};

const handleAllUsers = (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    else {
      return res.json(data);
    }
  });
};

const handleUserLog = (req, res) => {
  if (req.params.id === undefined || req.params.id === null) {
    return res.json({ error: "_id não encontrado" });
  }

  const userId = req.params.id;

  const findConditions = { userId };

  if (
    (req.query.from !== undefined && req.query.from !== "") ||
    (req.query.to !== undefined && req.query.to !== "")
  ) {
    findConditions.date = {};

    if (req.query.from !== undefined && req.query.from !== "") {
      findConditions.date.$gte = new Date(req.query.from);
    }

    if (req.query.to !== undefined && req.query.to !== "") {
      findConditions.date.$lte = new Date(req.query.to);
    }
  }

  const limit = req.query.limit !== "" ? parseInt(req.query.limit) : 0;

  User.findById(userId, (err, data) => {
    if (!err && data !== null) {
      Exercises.find(findConditions)
        .sort({ date: "asc" })
        .limit(limit)
        .exec((err2, data2) => {
          if (err2) throw err2;
          else {
            return res.json({
              username: data.username,
              _id: data._id,
              log: data2.map(function (e) {
                return {
                  description: e.description,
                  duration: e.duration,
                  date: e.date.toDateString(),
                };
              }),
              count: data2.length,
            });
          }
        });
    } else {
      return res.json({ error: "Usuario não encontrado!" });
    }
  });
};

export { handleNewUser, handleNewExercise, handleAllUsers, handleUserLog };
