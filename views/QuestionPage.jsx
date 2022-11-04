const React = require('react');
const Layout = require('./Layout');

function QuestionPage({ topics, question}) {

  return (
    <Layout>
      
      <form
        data-id={id}
        method="POST"
        action={`/topis/${id}/${questionId}`}
        className="form card-add"
      >
        <h3 className="form_title">Новое поле</h3>
        <div className="form-control">
          <label htmlFor="titleInput">Имя</label>
          <input
            id="titleInput"
            name="title"
            type="text"
            placeholder="Название"
          />
        </div>
        <div className="form__control">
          <label htmlFor="titleInput">Изображение</label>
          <input
            id="titleInput"
            name="image"
            type="url"
            placeholder="Фото"
          />
        </div>

        <button type="submit" className="addBtn">Добавить</button>
        <div className="resultAdd" />
      </form>
  
      <script defer src="/js/cardlistclient.js" />
    </Layout>
  );
}

module.exports = QuestionPage;