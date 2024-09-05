const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const quiz=document.getElementById('quiz');
const answerEL=document.querySelectorAll('.answer');
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const subitd=document.getElementById('submit');


let currentquiz =0;
let score =0;
loadQuiz()


function loadQuiz(){
    delselectanswers()
    const currentquizdata=quizData[currentquiz];
    questionEl.innerHTML = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;


}
function delselectanswers(){
    answerEL.forEach( anser => anser.checked = false)
}
function getselected(){
    let answer;
    answerEL.forEach(answ=>{
         if(answ.checked){
             answer = answ.id
         }
    }) 
    return answer
}
subitd.addEventListener('click',()=>{
    
       const answer = getselected()
       if(answer){
          if(answer === quizData[currentquiz].correct){
             score++
          }
          currentquiz++
          if(currentquiz < quizData.length){
            loadQuiz()
          }else{
             quiz.innerHTML = `
                 <hh2>You answered cirrectly at ${score}/${quizData.length} questions</h2>
                 <button onclick="location.reload()">Reload</button>
             `
          }
       }
})

