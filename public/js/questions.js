const questionList = document.querySelector('.questionList');

questionList.addEventListener('click', async (event) => {
  const isBtn = event.target.classList.contains('btn-primary');
  if (!isBtn) {
    return;
  }
  const container = event.target.closest('.container');
  const questionId = container.dataset.id;
  const topic = document.querySelector('.container');
  const topic_id = topic.dataset.id;
  const answer = container.querySelector('.form-control').value;
  const response = await fetch(`/topics/${topic_id}/${questionId}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      questionId,
    }),
  });
  const data = await response.json();
  console.log(data.answer);
  if (answer === data.answer) {
    await fetch('https://yesno.wtf/api?force=yes')
      .then((answergif) => answergif.json())
      .then((gif) => container.insertAdjacentHTML('beforeend', `<p>Верно!</p><img src=${gif.image}>`));
  } else {
    await fetch('https://yesno.wtf/api?force=no')
      .then((answergif) => answergif.json())
      .then((gif) => container.insertAdjacentHTML('beforeend', `<p>Почти угадали! Правильный ответ: ${data.answer}</p><img src=${gif.image}>`));
  }
})