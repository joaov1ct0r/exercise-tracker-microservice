import Exercises from '../models/exercisesModel';

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

export { handleNewUser };
