const exercises = {
  chest: 'تمرين Push-up: جسم مستقيم، انزل ببطء ثم ادفع للأعلى.',
  back: 'تمرين Row: اسحب الوزن نحو الجذع مع ظهر ثابت.',
  legs: 'تمرين Squat: انزل كأنك تجلس مع ثبات الركبتين.',
  shoulders: 'تمرين Shoulder Press: ادفع للأعلى بدون تقوس الظهر.'
};

const muscleSelect = document.getElementById('muscleSelect');
const exerciseBox = document.getElementById('exerciseBox');
if (muscleSelect && exerciseBox) {
  const render = () => {
    exerciseBox.textContent = exercises[muscleSelect.value];
  };
  muscleSelect.addEventListener('change', render);
  render();
}

const answers = { q1: 'b', q2: 'b', q3: 'b' };
const submitQuiz = document.getElementById('submitQuiz');
if (submitQuiz) {
  submitQuiz.addEventListener('click', () => {
    let score = 0;
    Object.keys(answers).forEach((key) => {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === answers[key]) score += 1;
    });
    const result = document.getElementById('quizResult');
    if (result) result.textContent = `نتيجتك: ${score} / 3`;
  });
}
