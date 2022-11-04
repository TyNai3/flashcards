const router = require('express').Router();
const { Question, Topic } = require('../db/models');
const Questions = require('../views/Questions.jsx');

router.get('/:topic_id/questions/:question_id', async (req, res) => {
  console.log(req.params);

  try {
    const { topic_id, question_id } = req.params;
    const question = await Question.findOne({ where: { id: question_id, topic_id } });
    if (!question) {
      res.redirect('/topics');
    }
    const topic = await Topic.findOne({ where: { id: topic_id } });
    res.renderComponent(Questions, { question, topic });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
