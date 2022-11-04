const router = require('express').Router();
const Registration = require('../../views/Registration');

router.get('/', (req, res) => {
  res.renderComponent(Registration, { title: 'Registration' });
});

module.exports = router;
