const quizData = [
  { q: "ما الوحدة الانقباضية الأساسية داخل الليف العضلي؟", options: ["الساركومير", "الأوتار", "الغضروف"], a: 0 },
  { q: "ما العضلة التي تعمل لا إرادياً وتضخ الدم؟", options: ["القلبية", "الهيكلية", "الملساء في المعدة"], a: 0 },
  { q: "أي مبدأ صحيح لنمو العضلات؟", options: ["التدرج في الحمل + التغذية + النوم", "رفع أقصى وزن يومياً", "تمرين بلا راحة"], a: 0 },
  { q: "أي تمرين يستهدف الظهر العريض غالباً؟", options: ["Lat Pulldown", "Crunch", "Wrist Curl"], a: 0 },
  { q: "ما الفرق الأساسي بين الحجم والقوة؟", options: ["القوة هي إنتاج حمل أعلى", "الحجم يعني نومًا أطول فقط", "لا يوجد فرق"], a: 0 },
  { q: "أي إجراء يقلل الإصابات قبل التمرين؟", options: ["الإحماء التدريجي", "البدء مباشرة بأوزان ثقيلة", "تجاهل شرب الماء"], a: 0 }
];

function renderQuiz() {
  const box = document.getElementById("quiz-box");
  if (!box) return;
  box.innerHTML = quizData.map((item, i) => `
    <div class="q-item">
      <p><strong>السؤال ${i + 1}:</strong> ${item.q}</p>
      ${item.options.map((op, j) => `<label><input type="radio" name="q${i}" value="${j}"> ${op}</label>`).join("<br>")}
    </div>
  `).join("");

  document.getElementById("submit-quiz")?.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((item, i) => {
      const checked = document.querySelector(`input[name='q${i}']:checked`);
      if (checked && Number(checked.value) === item.a) score++;
    });
    const percent = Math.round((score / quizData.length) * 100);
    const result = document.getElementById("quiz-result");
    if (result) result.textContent = `نتيجتك: ${score}/${quizData.length} (${percent}%). ${percent >= 80 ? "ممتاز جداً" : percent >= 60 ? "جيد جداً" : "احتج مراجعة الصفحات"}`;
  });
}

document.addEventListener("DOMContentLoaded", renderQuiz);
