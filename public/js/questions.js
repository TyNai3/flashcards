const questionList = document.querySelector('.questionList');

questionList.addEventListener('click', async (event) => {
  const isBtn = event.target.classList.contains('btn-primary');
  if (!isBtn) {
    return;
  }
  
})