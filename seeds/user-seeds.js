const { User } = require('../models');

const userData = [
    {
        username: "sehaj_s",
        twitter: "sehaj_s",
        github: "sehaj97",
        email: "admin@gmail.com",
        password: "password1!"
    },
    {
        username: "karan_J",
        twitter: "karan_J",
        github: "karan_J",
        email: "karan_J@gmail.com",
        password: "password1!"
    },
    {
        username: "shean_l",
        twitter: "shean_l",
        github: "shean_l",
        email: "shean_l@gmail.com",
        password: "password1!"
    },
    {
        username: "pawan_s",
        twitter: "pawan_s",
        github: "pawan_s",
        email: "pawan_s@gmail.com",
        password: "password1!"
    },
    {
        username: "rohit_r",
        twitter: "rohit_r",
        github: "rohit_r",
        email: "rohit_r@gmail.com",
        password: "password1!"
    },
    {
        username: "seema_k",
        twitter: "seema_k",
        github: "seema_k",
        email: "seema_k@gmail.com",
        password: "password1!"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;