const quizData = [
  { q: "ما النوع المرتبط بالعظام والأوتار؟", options: ["العضلات الهيكلية", "العضلات الملساء", "العضلة القلبية"], a: 0 },
  { q: "أي عامل أساسي لنمو العضلات بعد التدريب؟", options: ["الراحة والنوم", "السهر", "إهمال التغذية"], a: 0 },
  { q: "أي تمرين يستهدف الصدر بشكل مباشر؟", options: ["Push-up", "Lateral Raise", "Calf Raise"], a: 0 },
  { q: "ما العضلة المسؤولة عن ضخ الدم؟", options: ["القلبية", "الهيكلية", "الملساء"], a: 0 },
  { q: "من وسائل الوقاية من الإصابة؟", options: ["الإحماء والتدرج", "زيادة الأوزان فجأة", "ترك الماء"], a: 0 },
  { q: "تمرين Romanian Deadlift يستهدف غالبًا؟", options: ["الخلفية والألوية", "الساعد فقط", "الرقبة فقط"], a: 0 }
];

function renderQuiz() {
  const box = document.getElementById("quiz-box");
  if (!box) return;
  box.innerHTML = quizData.map((item, i) => `
    <div class="q-item">
      <p><strong>س${i + 1}:</strong> ${item.q}</p>
      ${item.options.map((op, j) => `<label><input type="radio" name="q${i}" value="${j}"> ${op}</label>`).join("<br>")}
    </div>
  `).join("");

  document.getElementById("submit-quiz")?.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((item, i) => {
      const checked = document.querySelector(`input[name='q${i}']:checked`);
      if (checked && Number(checked.value) === item.a) score++;
    });
    const ratio = Math.round((score / quizData.length) * 100);
    document.getElementById("quiz-result").textContent = `نتيجتك: ${score}/${quizData.length} (${ratio}%)`;
  });
}

document.addEventListener("DOMContentLoaded", renderQuiz);
