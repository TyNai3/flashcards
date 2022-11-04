const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/registration', async (req, res) => {
  try {
    const {
      login, email, password, passwordConfirm,
    } = req.body;
    const findUser = await User.findOne({ // findOne, findAll, update,create,destroi
      where: {
        email,
      },
      raw: true,
    });
    if (findUser) {
      return res.status(400).json({ status: 'error', message: 'Такой пользователь существует' });
    }
    if (password !== passwordConfirm) {
      return res.status(400).json({ status: 'error', message: 'Пароли не совпадают' });
    }
    if (password.length < 8) {
      return res.status(400).json({ status: 'error', message: 'Длина пароля должна быть больше 7 символов' });
    }
    if (!login || !email) {
      return res.status(400).json({ status: 'error', message: 'Поле не должно быть пустым' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      login,
      email,
      password: hashedPassword,
    });

    newUser.save();

    return res.status(200).json({ status: 'success', url: '/topics' });
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
