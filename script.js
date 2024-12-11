const questions =[
    {
        question: "What is the first pillar of Islam?",
        answers: [
            { text: "Salah (Prayer)", correct: false },
            { text: "Shahada (Declaration of Faith)", correct: true },
            { text: "Zakat (Charity)", correct: false },
            { text: "Hajj (Pilgrimage)", correct: false },
        ]
    },
    {
        question: "Which angel brought the Quran to Prophet Muhammad (PBUH)?",
        answers: [
            { text: "Angel Israfil", correct: false },
            { text: "Angel Jibreel (Gabriel)", correct: true },
            { text: "Angel Mikail (Michael)", correct: false },
            { text: "Angel Azrael", correct: false },
        ]
    },
    {
        question: "How many chapters (Surahs) are there in the Quran?",
        answers: [
            { text: "100", correct: false },
            { text: "112", correct: false },
            { text: "114", correct: true },
            { text: "120", correct: false },
        ]
    },
    {
        question: "What is the holiest city in Islam?",
        answers: [
            { text: "Medina", correct: false },
            { text: "Mecca", correct: true },
            { text: "Jerusalem", correct: false },
            { text: "Baghdad", correct: false },
        ]
    },
    {
        question: "During which month do Muslims fast from dawn to sunset?",
        answers: [
            { text: "Shawwal", correct: false },
            { text: "Muharram", correct: false },
            { text: "Ramadan", correct: true },
            { text: "Dhul-Hijjah", correct: false },
        ]
    },
    {
        question: "What is the term for the Islamic charity tax given to the needy?",
        answers: [
            { text: "Sadaqah", correct: false },
            { text: "Zakat", correct: true },
            { text: "Fidyah", correct: false },
            { text: "Kaffarah", correct: false },
        ]
    },
    {
        question: "Which surah is known as the 'Heart of the Quran'?",
        answers: [
            { text: "Surah Al-Baqarah", correct: false },
            { text: "Surah Al-Mulk", correct: false },
            { text: "Surah Yaseen", correct: true },
            { text: "Surah Al-Fatiha", correct: false },
        ]
    },
    {
        question: "What is the name of the well located near the Kaaba in Mecca?",
        answers: [
            { text: "Well of Zamzam", correct: true },
            { text: "Well of Safa", correct: false },
            { text: "Well of Marwah", correct: false },
            { text: "Well of Hajar", correct: false },
        ]
    }
    
];

const questionElement = document.getElementById("questions");
const answerElement = document.getElementById("answers");
const nextBtn = document.getElementById("nextbtn")

let index = 0;
let qNo = index+1;
let score = 0;

function showQuestions(){

    questionElement.innerHTML = "";
    answerElement.innerHTML = "";

    let cQuestion = questions[index]; 
    questionElement.innerHTML = qNo + "." + cQuestion.question;
    
    cQuestion.answers.forEach(answer => {

        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct
        answerElement.appendChild(button);

        button.addEventListener("click" , selectAnswer);
        
    
    })

    
}


function selectAnswer(e){

    let selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct == "true";
    

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;    
    }
    else{
        selectedBtn.classList.add("incorrect");         
    }
    Array.from(answerElement.children).forEach(child => {
        if (child.dataset.correct === "true") {
            child.classList.add("correct");
        }
        child.disabled =true;
    });
    nextBtn.style.display = "block"

    nextBtn.addEventListener("click" , next)

}

function next() {
   index++;
   qNo++;
   if(index<questions.length){
    showQuestions();
   }else{
    showScore();
   }
}


function showScore(){

    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again"
    answerElement.innerHTML = "";

    nextBtn.removeEventListener("click", next);
    nextBtn.addEventListener("click", restartGame);

}

function restartGame(){

    index = 0;
    qNo = 1;
    score = 0;
    nextBtn.innerHTML = "Next";

    nextBtn.removeEventListener("click", restartGame)
    nextBtn.addEventListener("click" , next)

    showQuestions()

}

showQuestions()