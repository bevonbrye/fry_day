const db = require('../models');

// ------different methods to retrieve all dat:

//1: --------------------------------

const index = (req, res) => {
    db.review.findAll({ include: [db.user] }).then((allReviews) => {
        res.json(allReviews)
    })
}

//------------------Async ----------------Await----show
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




// --------------------------------furture use
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
    const review = await db.review.create({
        ...req.body,
        userId: req.user.id
    })
    res.json({ review }) //initiate send 
}

const destroy = (req, res) => {
    db.review.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.json({ status: 200 })
    })
}

//------------------ Update in CRUD provided by the API, will add later: 

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