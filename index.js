const {getOwners, changeEmail, changeAddress, changeAddressDisplay, getCredits} = require('./modules/sql')

const path = require('path')
const express = require('express');
const { response } = require('express');
const port = process.env.PORT || '3000';
const app = express();
const router = express.Router();

app.use(express.static('public'));
app.use('/api', router);

router.use((req,res,next)=>{
    // Middleware (If Needed)
    console.log("Middleware");
    next();
});

router.route('/owners').get((req,res)=>{
    getOwners().then(result => {
        return res.status(200).send(result)
    }).catch((error) =>{
        console.log(error);
        return res.status(550).send(error)
    });
});
router.route('/credits/:ID').get((req,res)=>{
    getCredits(req.params.ID).then(result => {
        return res.status(200).send(result)
    }).catch((error) =>{
        console.log(error);
        return res.status(550).send(error)
    });
});

router.route('/address/:id').get((req,res)=>{
    changeAddressDisplay(req.params.id).then(result => {
        return res.status(200).send(result)
    }).catch((error) =>{
        console.log(error);
        return res.status(550).send(error)
    });
});

router.route('/changeEmail/:id/:email').get((req,res)=>{
    changeEmail(req.params.id, req.params.email).then(result => {
        return res.status(200).send(result)
    }).catch((error) =>{
        console.log(error);
        return res.status(550).send(error)
    });
});

router.route('/changeAddress/:id/:fname/:lname/:street/:state/:zip/:country').get((req,res)=>{
    changeAddress(req.params.id, req.params.fname, req.params.lname, req.params.street, req.params.state, req.params.country, req.params.zip).then(result => {
        return res.status(200).send(result)
    }).catch((error) =>{
        console.log(error);
        return res.status(550).send(error)
    });
});


currentUserID = 0;


// Example of very basic routing
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

//Email Route
app.get('/email', (req, res) => {
    res.sendFile(__dirname + "/public/emailGUI.html");
});

//Credit Route
app.get('/credit', (req, res) => {
    res.sendFile(__dirname + "/public/CreditGUI.html");
});

//Credit Route
app.get('/reservations', (req, res) => {
    res.sendFile(__dirname + "/public/reservation.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + "/public/404.html");
});

module.exports = { currentUserID };