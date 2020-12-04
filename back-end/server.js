// imports
require('dotenv').config();
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const morgan = require('morgan')

const routes = require('./routes')
const passport = require('./passport');
const db = require('./models');
const { all } = require('./routes/auth');

const port = process.env.PORT || 4000
const app = express()

// middleware - server logging
app.use(morgan('dev'))

// middleware - JSON parsing
app.use(express.json())

// middleware - cors
const corsOptions = {
    // from which URLs do we want to accept requests
    origin: ['http://localhost:3000'],
    credentials: true, // allow the session cookie to be sent to and from the client
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions))

// middleware - session config
app.use(session({
    // session is stored in the DB
    secret: "REPLACE_THIS_WITH_A_REAL_SECRET",
    resave: false, // will not resave sessions
    saveUninitialized: false, // only create a session when a property is added to the session
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

// middleware - passport config
app.use(passport.initialize())
app.use(passport.session())

// middleware - API routes
app.use('/api/v1/auth', routes.auth)
app.use('/api/v1/reviews', routes.reviews);

//routes allows us to handle second piece of middleware
//without morgan use the next function 
app.use((req, res, next) => {
    //sends to the next route handler: 
    next();
})

// //routes: 

// gets all reveiws 


// app.get('/api/v1/reviews', async(req, res) => {
//     db.review.findAll({ include: [db.user] }).then((allReviews) => {
//         res.json(allReviews)
//     })
// });

//send jsaon response to friont end


//get one reviews: 

// app.get('/api/v1/reviews/:id', (req, res) => {
//     // db.review.create(req.params)
// })

// // create a reviews: 

// app.post('/api/v1/reviews', async(req, res) => {
//     await db.review.create({
//         ...req.body,
//         userId: req.user.id
//     })

//     //take everything in a and pulls it out 
//     res.sendStatus(200) //initiate send 
// })


// // Update

// app.put('/api/v1/reviews/:id', (req, res) => {
//     console.log(req.params.id)
//     console.log(req.body)

// })

// //delete: 

// app.delete('/api/v1/reviews/:id', (req, res) => {
//     const id = req.body.id
//     db.reviews
//         .destroy({
//             where: { id: id },
//         })
//         .then((deletedReview) => {
//             res.redirect('back')
//         })
// })




// connection
app.listen(port, () => console.log(`Server is running on port ${port}`))