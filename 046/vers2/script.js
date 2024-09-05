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
const question=document.querySelector('.queston');
const answers=document.querySelectorAll('.answer');
const a_option=document.getElementById('a_option');
const b_option=document.getElementById('b_option');
const c_option=document.getElementById('c_option');
const d_option=document.getElementById('d_option');
const submit=document.getElementById('sumbit')
const quizcontainer=document.querySelector('.quiz-container');
let questionnumber = 0;
let score = 0;
createquiz()
function createquiz(){
    clearallclickeditems()
  question.innerText =  quizData[questionnumber].question;
  a_option.innerText =  quizData[questionnumber].a;
  b_option.innerText =  quizData[questionnumber].b;
  c_option.innerText =  quizData[questionnumber].c;
  d_option.innerText =  quizData[questionnumber].d;

}
submit.addEventListener('click',()=>{
     answers.forEach( anser =>{
           if(anser.checked){
            console.log(quizData[questionnumber].correct)
               if(anser.id === quizData[questionnumber].correct){
                  console.log(anser.id)
                   score++
               } 
                questionnumber++
                if(questionnumber < quizData.length){
                    createquiz();
                }else{
                    quizcontainer.innerHTML = `
                       <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
                       <button onclick="location.reload()">Reload</button>
                    `
                }
           }
     })
})
function clearallclickeditems(){
    answers.forEach( answ => answ.checked =false);
}