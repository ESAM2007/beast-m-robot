const quizData = [
  { q: "ما نوع العضلات المرتبط بالعظام ويعمل إرادياً؟", options: ["العضلات الهيكلية", "العضلات الملساء", "العضلة القلبية"], a: 0 },
  { q: "ما الوحدة الأساسية للانقباض داخل الليفة العضلية؟", options: ["الساركومير", "الوتر", "المفصل"], a: 0 },
  { q: "أي عامل يُعد أساسياً لبناء العضلات بعد التمرين؟", options: ["النوم والتعافي", "تخطي الوجبات", "زيادة التمرين بلا راحة"], a: 0 },
  { q: "أي تمرين يستهدف عضلات الفخذ الأمامي بصورة رئيسية؟", options: ["Squat", "Triceps Pushdown", "Shoulder Press"], a: 0 },
  { q: "الفرق الأدق بين القوة والحجم العضلي هو أن القوة تعني:", options: ["قدرة أعلى على إنتاج القوة", "مجرد تضخم شكلي", "زيادة الماء فقط"], a: 0 },
  { q: "أي ممارسة تقلل خطر الإصابات العضلية؟", options: ["الإحماء التدريجي والتقنية الصحيحة", "رفع أوزان كبيرة مباشرة", "إهمال الماء"], a: 0 }
];
function renderQuiz(){const box=document.getElementById("quiz-box");if(!box)return;box.innerHTML=quizData.map((item,i)=>`<div class="q-item"><p><strong>س${i+1}:</strong> ${item.q}</p>${item.options.map((op,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${op}</label>`).join("<br>")}</div>`).join("");document.getElementById("submit-quiz")?.addEventListener("click",()=>{let score=0;quizData.forEach((item,i)=>{const c=document.querySelector(`input[name='q${i}']:checked`);if(c&&Number(c.value)===item.a)score++;});const r=document.getElementById("quiz-result");if(r){const p=Math.round((score/quizData.length)*100);r.textContent=`نتيجتك: ${score} من ${quizData.length} (${p}%). ${p>=80?"ممتاز! لديك وعي عضلي قوي.":p>=50?"جيد جداً، راجع الصفحات لتثبيت المعلومة.":"ابدأ من الأساسيات ثم أعد المحاولة."}`;}})}
document.addEventListener("DOMContentLoaded",renderQuiz);
