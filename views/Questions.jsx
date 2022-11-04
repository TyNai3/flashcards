const React = require('react');
const Layout = require('./Layout');
const QuestionCard = require('./QuestionCard');

module.exports = function Questions({ question, topic }) {
  return (
    <Layout>
      <h4>
        <a href="/topics">
          Back to topic list
        </a>
      </h4>
      <h1>Flashcards</h1>
      <h3>
        Topic:
        {' '}
        {topic.title}
      </h3>
      <br />
      <ol className="questionList">
        <QuestionCard topic={topic} question={question} />
      </ol>
      <script src="/js/questions.js" />
    </Layout>
  );
};
