const router = require('express').Router();

const MainPage = require('../views/MainPage.jsx');

router.get('/', async (req, res) => {
  res.renderComponent(MainPage);
});
module.exports = router;
