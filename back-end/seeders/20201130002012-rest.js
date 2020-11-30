'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const bulkRestaurants = await queryInterface.bulkInsert('restaurants', [{
                name: 'Taco Bell',
                location: 'Modesto',
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