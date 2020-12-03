'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const bulkReviews = await queryInterface.bulkInsert('reviews', [{
                userId: 1,
                text: 'I LOVE THE FRIES HERE',
                restaurantId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], { returning: true })

    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};