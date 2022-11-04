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
    await queryInterface.bulkInsert('Questions', [
      {
        name: 'Астрономическая мера расстояния называется', answer: 'Световой год', topic_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Верхняя кора Земли называется', answer: 'Литосфера', topic_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Ближайшая к Солнцу планета это:', answer: 'Меркурий', topic_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Что тяжелее: килограмм железа или килограмм ваты?', answer: 'Одинаково', topic_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'При средней продолжительности жизни мы проводим во сне около...', answer: '25 лет', topic_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Какой математический знак указывает на порядок действий?', answer: 'Скобки', topic_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'От какой империи Россия унаследовала двуглавого орла на гербе?', answer: 'Византийской', topic_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Название какого животного с греческого переводится как "водяная лошадь"?', answer: 'Гиппопотам', topic_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'В честь военных побед полководцев в Древнем Риме воздвигали:', answer: 'Триумфальные арки', topic_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Какой древнегреческий историк назвал Египет "дар Нила"?', answer: 'Геродот', topic_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
