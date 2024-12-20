console.log('Website geladen!')
document.getElementById('quizForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const answers = {
    q1: 'b',
    q2: 'b',
    q3: 'a',
    q4: 'b',
    q5: 'b',
    q6: 'b',
    q7: 'b',
  };

  let score = 0;
  const quizForm = document.getElementById('quizForm');

  for (let question in answers) {
    const userAnswer = quizForm.querySelector(`input[name="${question}"]:checked`);
    if (userAnswer && userAnswer.value === answers[question]) {
      score++;
    }
  }

  const resultMessage = `You got ${score} out of 7 correct!`;
  const quizResult = document.getElementById('quizResult');
  quizResult.innerHTML = resultMessage;
});
