const quizData = [
  { q: "أي نوع عضلي يرتبط بالعظام عبر الأوتار؟", options: ["العضلات الهيكلية", "العضلات الملساء", "العضلة القلبية"], a: 0 },
  { q: "أي عامل أساسي يزيد تعافي العضلات؟", options: ["النوم 7-9 ساعات", "السهر اليومي", "إهمال الماء"], a: 0 },
  { q: "ما المقصود بالقوة العضلية؟", options: ["القدرة على إنتاج قوة ورفع أحمال أعلى", "زيادة اللون الداكن للعضلة", "التعب السريع"], a: 0 },
  { q: "أي تمرين يستهدف العضلة الخلفية والمؤخرة؟", options: ["Romanian Deadlift", "Crunch فقط", "تمرين رقبة"], a: 0 },
  { q: "أي خطوة وقائية قبل التمرين؟", options: ["الإحماء التدريجي", "البدء بأقصى وزن", "تجاهل الإطالة دائمًا"], a: 0 },
  { q: "أي عضلة تعمل على ضخ الدم؟", options: ["العضلة القلبية", "العضلة الهيكلية", "الملساء"], a: 0 }
];
function renderQuiz(){const box=document.getElementById('quiz-box');if(!box)return;box.innerHTML=quizData.map((item,i)=>`<div class="q-item"><p><strong>س${i+1}:</strong> ${item.q}</p>${item.options.map((op,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${op}</label>`).join('<br>')}</div>`).join('');document.getElementById('submit-quiz')?.addEventListener('click',()=>{let s=0;quizData.forEach((item,i)=>{const c=document.querySelector(`input[name='q${i}']:checked`);if(c&&Number(c.value)===item.a)s++;});const percent=Math.round((s/quizData.length)*100);document.getElementById('quiz-result').textContent=`نتيجتك: ${s} من ${quizData.length} (${percent}%)`;});}
document.addEventListener('DOMContentLoaded',renderQuiz);
