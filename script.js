const questions =[
    {
        question:"What is largest animal in the world",

        answers : [
            {text:"Shark" , correct:false},
            {text:"Blue Whale" , correct:true},
            {text:"Elephant" , correct:false},
            {text:"Giraffee" , correct:false},
        ]
    },
    {
        question:"Which is the smallest country in the world",

        answers: [
            {text:"Vetican City" , correct:true},
            {text:"Bhutan" , correct:false},
            {text:"Nepal" , correct:false},
            {text:"Sri Lanka" , correct:false},
        ]
    },
    {
        question:"What is largest desert in the world",

        answers : [
            {text:"Kalahari" , correct:false},
            {text:"Gobi" , correct:false},
            {text:"Sahara" , correct:false},
            {text:"Antartica" , correct:true},
        ]
    },
    {
        question:"What is smallest continent in the world",

        answers: [
            {text:"Asia" , correct:false},
            {text:"Australia" , correct:true},
            {text:"Africa" , correct:false},
            {text:"Europe" , correct:false},
        ]
    },

    {
        question:"Who is the ziyahid's wife",

        answers : [
            {text:"Shifa" , correct:true},
            {text:"Anjum" , correct:true},
            {text:"Me" , correct:true},
            {text:"Shifa Anjum" , correct:true},
        ]
    }
];

const questionElements=document.getElementById("questions");
const answerElements=document.getElementById("answers");
const nextButton=document.getElementById("nextbtn");

let currentIndex=0;
let score=0;

function startQuiz(){
    currentIndex = 0;
    score =0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion =questions[currentIndex];
    let questionNo=currentIndex + 1;
    questionElements.innerHTML=questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerElements.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerElements.firstChild){
        answerElements.removeChild(answerElements.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct=="true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }

    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerElements.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}



function showScore(){
    resetState();
    questionElements.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"
    
}

function handleNextButton(){
    currentIndex++;
    if(currentIndex<questions.length){
        showQuestion();

    }else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{

    if(currentIndex<questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }

})


startQuiz();



