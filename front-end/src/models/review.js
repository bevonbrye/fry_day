// import db from "../../../back-end/models"

const URL = "http://localhost:4000/api/v1"

export default class ReviewModel {

    // static show = (resstaurantId) => {
    //     return fetch(`${ URL }/${ restaurantId }`).then(res => res.json())
    // }

    // static showPost = (userId) => {
    //     return fetch(`${ URL }/reviews/${ userId }`).then(res => res.json())
    // }

    // static indexByRestaurant = async(restaurantId) => {
    //     try {
    //     const fetchedReviews = await fetch(`${URL}`);
    //     return fetchedReviews
    //     }catch(e) {}
    // }

    static getAll = () => {
        return fetch(`${ URL }/reviews`).then(res => res.json())
    }

    static create(reviewData) {
        return fetch(`${URL}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include", //sends user to server 
            body: JSON.stringify(reviewData)
        }).then(res => res.json())
    }

    static delete = (restaurantId) => {
        return fetch(`${ URL }/reviews/${ restaurantId }`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}