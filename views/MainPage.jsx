const React = require('react');
const Layout = require('./Layout');

function MainPage() {
  return (
    <Layout >

      <div className="container">
        <p>Flashcards</p>
        <button id ="play">Play</button>
        
        
        <script defer src="/js/mainclient.js" />
      </div>

    </Layout>
  );
}
module.exports = MainPage;