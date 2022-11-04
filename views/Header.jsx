const React = require('react');

function Header({ user }) {
  return (
    <>
      {user ? (
        <div className="container">
        <div className="header-container">
          <ul className="navbar">
            <li className="navbar-item">
              <a className="nav-link" href="/logout">Выйти</a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/">Главная</a>
            </li>

            <li className="navbar-item">
              <a className="nav-link" href="/result">Результат</a>
            </li>
          </ul>
        </div>
        </div>
      ) : (
        <div className="container">
        <div className="header-container">
          <ul className="navbar">
            <li className="navbar-item">
              <a className="nav-link" href="/authentication">Войти</a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/registration">Регистрация</a>
            </li>

          </ul>
        </div>
        </div>
      )}
      <link rel="stylesheet" href="/css/headerStyle.css" />
    </>
  );
}

module.exports = Header;
