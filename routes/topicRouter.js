const router = require('express').Router();
const TopicPage = require('../views/TopicPage.jsx');
const { Topic } = require('../db/models');
const { Question } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.findAll();
    res.renderComponent(TopicPage, { topics });
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/:topic_id', async (req, res) => {
  try {
    const { topic_id } = req.params;
    const topic = await Topic.findOne({ where: { id: topic_id } });
    const question = await Question.findAll({ where: { topic_id } });
    const question_id = question[0].id;
    res.redirect(`/${topic_id}/questions/${question_id}`);
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/:topic_id/:questionId', async (req, res) => {
  try {
    const { questionId } = req.params;
    // console.log(req.params);
    const question = await Question.findOne({ where: { id: questionId } });
    res.json(question);
    res.end();
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
