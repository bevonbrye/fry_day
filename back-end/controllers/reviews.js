const db = require('../models');


// app.get('/api/v1/reviews', async(req, res) => {
//     db.review.findAll({ include: [db.user] }).then((allReviews) => {
//         res.json(allReviews)
//     })
// });

const index = (req, res) => {
        db.review.findAll({ include: [db.user] }).then((allReviews) => {
            res.json(allReviews)
        })
    }
    //------------------Async ----------------Await
    // const index = async(req, res) => {
    //     //
    //     try {
    //         const { restaurantId } = req.params
    //         const foundReviews = await db.review.findAll({
    //             where: { restaurantId }
    //         })
    //         res.json(foundReviews)
    //     } catch (error) {
    //         console.log(error)
    //         res.sendStatus(500)
    //     }
    // }





// const show = (req, res) => {
//     db.review.findByPk(req.params.id).then((foundReviews) => {
//             if (!foundReviews) return res.json({
//                 message: 'review with provided ID not found.'
//             })

//             res.json({ review: foundReviews })
//         })
//         .catch(err => console.log("Error at reviews#index", err))
// }

const create = (req, res) => {
    db.review.create(req.body).then((foundReviews) => {
        res.status(200).json({ review: foundReviews })
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

// 
// const destroy = (req, res) => {
//     db.review.destroy({
//       where: { id: req.params.id }
//     }).then(() => {
//       res.json({ message: `review with id ${req.params.id} has been deleted.` })
//     })
//     .catch(err => console.log("Error at reviews#index", err))
// }


module.exports = {
    index,
    // show,
    create,
    // update,
    // destroy,
};