/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Topics', [
      { title: 'Хочу всё знать', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Душная темка', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Мамкин Программист', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
