const bcrypt = require('bcryptjs');
const User = require('../models/user');
const multer = require('multer');
const path = require('path');

// הגדרת Multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // הגדרת שם ייחודי לקובץ
  }
});

const upload = multer({ storage: storage }).single('profilePic');

exports.login = (req, res) => {
    const { email, password } = req.body;

    // Check if the email and password are equal
    if (email === password) {
        console.log(email);
        console.log(password);
        return res.status(400).json({ message: "Email and password should not be the same." });
    }

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        if (user.password === password){
            return res.status(200).json({
                message: "Auth successful",
                name: user.name,
                email: user.email,
                id: user._id,
                profilePic : user.profilePic
            });
        } else {
            res.status(401).json({ message: "Auth failed" });
        }
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: err });
    });
};

exports.signup = (req, res) => {
    upload(req, res, function(err) {
        if (err) {
            return res.status(500).json({ error: err });
        }

        const { email, password, name } = req.body;
        const profilePic = req.file ? `/uploads/${req.file.filename}` : null;

        User.findOne({ email }).then(user => {
            if (user) {
                return res.status(409).json({ message: "Email already exists" });
            }

            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    return res.status(500).json({ error: err });
                }

                const newUser = new User({
                    name,
                    email,
                    password: password,
                    profilePic: profilePic, // שמירת נתיב התמונה
                    rate: 0
                });

                newUser.save().then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: "User created"
                    });
                }).catch(err => {
                    console.error(err);
                    res.status(500).json({ error: err });
                });
            });
        }).catch(err => {
            console.error(err);
            res.status(500).json({ error: err });
        });
    });
};
