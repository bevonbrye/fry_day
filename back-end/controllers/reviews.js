const db = require('../models');


// app.get('/api/v1/reviews', async(req, res) => {
//     db.review.findAll({ include: [db.user] }).then((allReviews) => {
//         res.json(allReviews)
//     })
// });





// ------different get methods:

const index = (req, res) => {
    db.review.findAll({ include: [db.user] }).then((allReviews) => {
        res.json(allReviews)
    })
}

// const index = (req, res) => {
//         db.review.findAll({ include: [db.user] }).then((allreviews) => {
//                 if (!allreviews) return res.json({
//                     message: 'No reviews found in database.'
//                 })

//                 res.send("Incomplete reviews#index controller function")
//             })
//             .catch(err => console.log("Error at reviews#index", err))
//     }
//------------------Async ----------------Await
const show = async(req, res) => {
    //
    try {
        const { restaurantId } = req.params
        const foundReviews = await db.review.findAll({
                where: { restaurantId }
        })
        res.json(foundReviews)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}





// const show = (req, res) => {
//     db.review.findByPk(req.params.id).then((foundReviews) => {
//             if (!foundReviews) return res.json({
//                 message: 'review with provided ID not found.'
//             })

//             res.json({ review: foundReviews })
//         })
//         .catch(err => console.log("Error at reviews#index", err))
// }

const create = async(req, res) => {
   const review =  await db.review.create({
            ...req.body,
            userId: req.user.id
        })
    res.json({review}) //initiate send 
}


// app.post('/api/v1/reviews', async(req, res) => {
//     await db.review.create({
//         ...req.body,
//         userId: req.user.id
//     })

//     //take everything in a and pulls it out 
//     res.sendStatus(200) //initiate send 
// })

const destroy = (req, res) => {
    db.review.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.json({status: 200})
    })
}

// const update = (req, res) => {
//     // make the update route
//     db.review.update(req.body, {
//       where: {
//         id: req.params.id
//       }
//     }).then((updatedReview) => {
//         // Validations and error handling here
//         res.json({ review: updatedReviews })
//     })
//     .catch(err => console.log("Error at reviews#index", err))
// }




module.exports = {
    index,
    show,
    create,
    // update,
    destroy,
};