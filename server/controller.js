const bcrypt = require('bcrypt')

const register = async (req, res) => {
    // Body Info
    const {username, password} = req.body
    // DB Instance
    const db = req.app.get('db')
    // Look for an Existing User with that Username
    const foundUser = await db.find_user([username])
    // Check to see if foundUser Exists
    if(foundUser[0]){
        return res.status(409).send('Sorry Username is Already Taken')
    }
    // Salt and Hash the Password
    const passwordSalt = bcrypt.genSaltSync(15)
    const passwordHash = bcrypt.hashSync(password, passwordSalt)
    const profile_pic = `https://robohash.org/${username}.png`
    // Register User
    const newUser = await db.register_user([username, passwordHash, profile_pic])
    // Remove Password
    delete newUser[0].password
    // Session
    req.session.user  = newUser[0]
    // Send a Response
    res.status(200).send(newUser[0])
};
const login = async (req, res) => {
    // Body Info
    const {username, password} = req.body
    // DB Instance
    const db = req.app.get('db')
    // Find User with Username
    const foundUser = await db.find_user([username])
    // Check to see Length of User
    if(!foundUser[0]){
        return res.status(409).send('Incorrect Username')
    }
    // Check is the user is Authenticated
    const authedPassword = bcrypt.compareSync(password, foundUser[0].password)
    if(authedPassword){
        // Remove Password
        delete foundUser[0].password
        req.session.user = foundUser[0]
        res.status(200).send('Correct')
    }
    else {
        res.status(401).send('Incorrect Password')
    }
};

const getPosts =(req, res) => {
    req.app.get('db').get_posts()
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err))
};

const getPost = (req, res) => {

};

const post = (req, res) => {

};

const logout = (req, res) => {
    req.session.destroy
};

module.exports = {
    register,
    login,
    getPosts,
    getPost,
    post,
    logout
}