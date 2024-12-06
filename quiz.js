const questions = [
    {
      question : "Who is father of java?",
      answers :[
        {Text:"james goosling",correct: true},
        {Text:"james bond",correct: false},
        {Text:"james",correct: false},
        {Text:"balayababu",correct: false},
    ]
    },
    {
        question : "what is spring?",
        answers :[
          {Text:"programming language",correct: false},
          {Text:"frame work",correct: false},
          {Text:"Database",correct: false},
          {Text:"ORM tool",correct: false},
      ]
      },
      {
      question : "what is java?",
      answers : [
        {Text:"programming language",correct: false},
        {Text:"object-oriented",correct: true},
        {Text:"framework",correct: false},
        {Text:"dependent-landuage",correct: false},
    ]
}

];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("nxt-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function  showQuestion(){
    resetState();
    let  currentQuestion= questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo +". "+currentQuestion.question

    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button")
        questionElement.innerHTML=answer.Text;
    nextButton.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }

    
    button.addEventListener("click,selectAnswer")

    });
    
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isc
}
   