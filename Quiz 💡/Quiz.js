const quizData = [
  {
    question: "1. Inside which HTML element do we put the JavaScript?",
    a: "<js>",
    b: "<scripting>",
    c: "<script>",
    d: "<javascript>",
    correct: "c",
  },
  {
    question:
      "2. What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script alt = 'etc.js'",
    b: "<script name = 'etc.js'",
    c: "<script src = 'etc.js'",
    d: "<script href = 'etc.js'",
    correct: "c",
  },
  {
    question: "3. How do you write 'Hello World' in an alert box?",
    a: "alertBox('hello world');",
    b: "alert('hello world');",
    c: "msgBox('hello world');",
    d: "msg('hello world');",
    correct: "b",
  },
  {
    question: "4. How do you create a function in JavaScript?",
    a: "Function myfunction()",
    b: "function:myfunction()",
    c: "function=myfunction()",
    d: "function myfunction()",
    correct: "d",
  },
  {
    question: "5. How to write an IF statement in JavaScript?",
    a: "if i == 5 then",
    b: "if i = 5",
    c: "if (i == 5)",
    d: "if i = 5 then",
    correct: "c",
  },
  {
    question:
      "6. How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    a: "if i <> 5 ",
    b: "if i =! 5 then",
    c: "if (i <> 5)",
    d: "if (i != 5)",
    correct: "d",
  },
  {
    question: "7. How does a FOR loop start?",
    a: "for(let i = 0; i <= 5; i++) ",
    b: "for i = 1 to 5",
    c: "for(i = 0; i <= 5)",
    d: "for(i<= 5; i++)",
    correct: "a",
  },
  {
    question: "8. How can you add a comment in a JavaScript?",
    a: "<-- This is a comment -->",
    b: "//This is a comment",
    c: "#This is a comment",
    d: "'This is a comment'",
    correct: "b",
  },
  {
    question: "9. How do you round the number 7.25, to the nearest integer?",
    a: "rnd(7.25)",
    b: "math.round(7.25)",
    c: "Math.rnd(7.25)",
    d: "Math.round(7.25)",
    correct: "d",
  },
  {
    question: "10. Which event occurs when the user clicks on an HTML element?",
    a: "onmouseover",
    b: "onchange",
    c: "onclick",
    d: "onmouseclick",
    correct: "c",
  },
];
if(localStorage.getItem("Name") == null){
window.location.href = "../index.html"
}  
//      User welcome

const headingchange = document.getElementById('headingchange')

//     Changecase

  let ccase = localStorage.getItem("Name")
  let changecase = ccase.charAt(0).toUpperCase() + ccase.slice(1)
  console.log(changecase);

headingchange.innerHTML = `Welcome ${changecase} to the Quiz`
//      User welcome End

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <div id="result">
            <h1>Result</h1>
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            </div>    
            `;
    }
  }
});

let start = document.getElementById("start");

let sec = 0;
let msec = 0;
let interval;
let sec1 = document.getElementById("sec");
let msec1 = document.getElementById("msec");

let quiz_container = document.getElementById("qc");
let startquiz = document.getElementById("start2");
start.addEventListener("click", () => {
  quiz_container.style.display = "block";
  startquiz.style.display = "none";

//   interval = setInterval(() => {
//     msec++;

//     if (msec == 100) {
//       msec = 0;
//       sec++;
//     }
//     if (sec < 10) {
//       sec1.innerHTML = "0" + sec;
//     } else {
//       sec1.innerHTML = sec;
//     }

//     msec1.innerHTML = msec;

//     if (sec == 15) {
//       sec = 0;
//       msec = 0;
//     }
//   },10);
});


const logout = document.getElementById('logout')
logout.addEventListener("click",()=>{
  let confirm1 = confirm("Confirm to logout")
  if(confirm1){
    localStorage.removeItem("Name")
    window.location.href = "../index.html"
  }
})

