const React = require('react');
const Layout = require('./Layout');

function MainPage() {
  return (
    <Layout >

      <div className="container">
        <p>Flashcards</p>
        <button className ="play">Play</button>
        
        
    
      </div>

    </Layout>
  );
}
module.exports = MainPage;