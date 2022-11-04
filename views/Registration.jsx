const React = require('react');
const Layout = require('./Layout');

function Registration({ title }) {
  return (

    <Layout title={title}>
      <div />
      <div className="container">
        <form className="registrationForm" method="POST" action="/registration">
          <div className="mb-3">
            <input name="login" type="text" className="form-control" placeholder="Login" />
          </div>
          <div className="mb-3">
            <input name="email" type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input name="password" type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="mb-3">
            <input name="passwordConfirm" type="password" className="form-control" placeholder="Password Confirmation" />
          </div>
          <div className="status" />
          <button type="submit" className="btn btn-primary">CLICK</button>

        </form>
      </div>
      <script src="/js/registration.js" />
    </Layout>

  );
}
module.exports = Registration;
