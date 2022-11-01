const { User } = require('../Models/user')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')
const config = require('../Config/config')


const getUser = async (req, res) => {
    await User.find({ _id: req.params.id })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => { res.status(401).json(err.message) })
}

const deleteUser = async (req, res) => {
    await User.deleteMany()
        .then(users => console.log(users))
}



const getAllUsers = async (req, res) => {
    await User.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => res.status(401).json(err))
}



const signIn = (req, res) => {

    bcrypt.hash(req.body.password, 10)
        .then((hashedPassword) => {
            req.body.password = hashedPassword
            const user = new User(
                {
                    ...req.body
                }
            )
            user.save()
                .then(user => {
                    console.log(user)
                    const playload = {
                        id: user.id,
                        name: user.name,
                        expire: Date.now() + 1000 * 60 * 60 * 24 * 7
                    }
                    const token = jwt.encode(playload, config.jwtSecret)
                    delete user.password
                    res.status(200).json({
                        userId: user.id,
                        token: `Bearer ${token}`
                    })
                })
                .catch(err => res.status(403).json(err.massage))

        })
}

const logIn = (req, res) => {

    User.findOne({ name: req.body.name })
        .then((user) => {

            if (!user) {
                res.status(401).json("pseudo or username incorect")
            }
            else {

                const playload = {
                    id: user.id,
                    name: user.name,
                    expire: Date.now() + 1000 * 60 * 60 * 24 * 7
                }
                const token = jwt.encode(playload, config.jwtSecret)

                bcrypt.compare(req.body.password, user.password)

                    .then((valid) => {
                        if (!valid) res.status(401).json("mot de passe incorrect")
                        else {
                            delete user.password
                            res.status(200).json({
                                userId: user.id,
                                token: `Bearer ${token}`
                            })
                        }

                    })
            }


        })
        .catch(err => res.status(403).json(err))

}

module.exports = { getUser, logIn, getAllUsers, signIn, deleteUser }