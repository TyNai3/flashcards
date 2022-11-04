const React = require('react');

module.exports = function Question({ topic, question }) {
  return (
    <section data-id={question.id} data-topic={topic.id} className="container" method="POST" action={`/topics/${topic.id}`}>
      <h3>{question.name}</h3>
      <br />
      <input data-input={question.id} value="" name="answer" type="text" className="form-control" id="exampleInputName" autoComplete="off" placeholder="your answer" required />
      <br />
      <button type="button" className="btn btn-primary">Show answer</button>
      <button type="button" className="btn btn-warning">Next question</button>
      <div className="answer">
        <span id={question.id} />
      </div>
    </section>
  );
};
