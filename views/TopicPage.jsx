const React = require('react');
const Layout = require('./Layout');

function TopicPage({ topics}) {
  return (
    <Layout>
      <div className="container">
        <p>Choose topic</p>
        <ul className="topicTheme">
          {topics.map((topic) => (
            <li key={topic.id}>
              <a href={`/topics/${topic.id}`}>

                {topic.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </Layout>
  );
}
module.exports = TopicPage;