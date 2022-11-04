const router = require('express').Router();
const { Topic } = require('../db/models');

const TopicPage = require('../views/TopicPage');

router.get('/', async (req, res) => {
  const topics = await Topic.findAll({
    logging: false,
  });
  res.renderComponent(TopicPage, { topics });
});
module.exports = router;
