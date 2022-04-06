import Exercises from '../models/exercisesModel.js';

import User from '../models/userModel';

const handleNewUser = (req, res) => {
    let username = req.body.username;
    let _id = '';

    User.findOne({ username: username }, (err, data) => {
        if (!err && data === null) {
            let newUser = new User({
                username: username
            });

            newUser.save((error, data) => {
                if (error) throw error;
                else {
                    _id = data['_id'];

                    return res.json({ username: username, _id: _id });
                }
            });
        } else {
            return res.json({ error: 'Usuario ja cadastrado!' });
        }
    });
};

const handleNewExercise = (req, res) => {
    if (req.params._id === undefined) {
        return res.json({ error: '_id não encontrado!' });
    }

    if (req.body.description === undefined) {
        return res.json({ error: 'description não encontrado!' });
    }

    if (req.body.duration === undefined) {
        return res.json({ error: 'duration não encontrado!' });
    }

    let userId = req.params._id;

    let description = req.body.description;

    let duration = req.body.duration;

    let date =
        req.body.date !== undefined ? new Date(req.body.date) : new Date();

    User.findById(userId, (err, data) => {
        if (!err && data !== null) {
            let newExercise = new Exercises({
                userId: userId,
                description: description,
                duration: duration,
                date: date
            });

            newExercise.save((error, data2) => {
                if (error) throw error;
                else {
                    return res.json({
                        username: data['username'],
                        _id: data['_id'],
                        description: data2['description'],
                        duration: Number(data2['duration']),
                        date: data2['date'].toDateString()
                    });
                }
            });
        } else {
            return res.json({ error: 'Usuario não encontrado' });
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
        return res.json({ error: '_id não encontrado' });
    }

    let userId = req.params.id;

    let findConditions = { userId: userId };

    if (
        (req.query.from !== undefined && req.query.from !== '') ||
        (req.query.to !== undefined && req.query.to !== '')
    ) {
        findConditions.date = {};

        if (req.query.from !== undefined && req.query.from !== '') {
            findConditions.date.$gte = new Date(req.query.from);
        }

        if (req.query.to !== undefined && req.query.to !== '') {
            findConditions.date.$lte = new Date(req.query.to);
        }
    }

    let limit = req.query.limit !== '' ? parseInt(req.query.limit) : 0;

    User.findById(userId, (err, data) => {
        if (!err && data !== null) {
            Exercises.find(findConditions)
                .sort({ date: 'asc' })
                .limit(limit)
                .exec((err2, data2) => {
                    if (err2) throw err2;
                    else {
                        return res.json({
                            username: data['username'],
                            _id: data['_id'],
                            log: data2.map(function (e) {
                                return {
                                    description: e.description,
                                    duration: e.duration,
                                    date: e.date.toDateString()
                                };
                            }),
                            count: data2.length
                        });
                    }
                });
        } else {
            return res.json({ error: 'Usuario não encontrado!' });
        }
    });
};

export { handleNewUser, handleNewExercise, handleAllUsers, handleUserLog };
