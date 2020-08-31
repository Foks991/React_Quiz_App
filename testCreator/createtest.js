let id = 0;
let questionId = 1;
let tests = [];
let selectedAnswer = null;

const createQuiz = (quizName, quizTitle, tests) => {
  return {
    [quizName] : {
        id: quizName,
        quizTitle: quizTitle,
        tests
    }
  }
};


//Inputs
const quizNameInput = document.getElementById('quizName');
const quizTitleInput = document.getElementById('quizTitle');

const questionInput = document.getElementById('question');
const correctAnswersInput = document.getElementById('correctAnswersArr');
const answersInputs = document.getElementsByClassName('answers');

//Buttons
const addTestBtn = document.getElementById('createObjectTest');
const createTestBtn = document.getElementById('createTest');

//Add questions
addTestBtn.addEventListener("click", () => {
    tests.push(createObj(correctAnswers(correctAnswersInput.value), question(questionInput.value), answers(answersInputs, questionId), selectedAnswer,id++));
    clearInputs();
});

//Object creators
const createObj = (correctAnswers, question, answers, selectedAnswer, id) => ({correctAnswers, question, answers, selectedAnswer, id});
const correctAnswers = (str) => str.split('').map(elem => +elem);
const question = (str) => str;
const answers = (inputs, id) => Array.prototype.slice.call(inputs).map(answer => answer.value).filter(el => el !== "").map(elem => ({"text" : elem, "id" : id++}));

//TextArea
const textArea = document.getElementById('textArea');

//Clear all inputs
const clearInputs = () =>{Array.prototype.slice.call(document.getElementsByClassName(`question`)).map(elem => elem.value = "")};

//Create Test
createTestBtn.addEventListener("click", () =>{
    textArea.value = JSON.stringify(createQuiz(quizNameInput.value, quizTitleInput.value, tests));
    textArea.select();
    document.execCommand("copy");
});
