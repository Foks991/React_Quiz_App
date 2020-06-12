
import {quizActionTypes} from "../actions/quizActions";

const initialState = {
    reactQuiz: {
        id: "React",
        quizTitle: "React Quiz",
        tests: [
            {
                // getstr: 'http:/backand/api/getQuiz?quizeId=qweeqw',
                correctAnswers: [1],
                question: 'Who Develop React.js?',
                answers: [
                    {text: 'Facebook', id: 1},
                    {text: 'Twitter', id: 2},
                    {text: 'Google', id: 3},
                    {text: 'microsoft', id: 4},
                ],
                selectedAnswer: null,
                id: 0,
            },
            {
                correctAnswers: [3],
                question: 'Which is used to keep the value of components unique?',
                answers: [
                    {text: 'store', id: 1},
                    {text: 'Data', id: 2},
                    {text: 'Key', id: 3},
                    {text: 'Ref', id: 4},
                ],
                selectedAnswer: null,
                id: 1,
            },
            {
                correctAnswers: [3],
                question: 'Which of the following called fat arrow function in react?',
                answers: [
                    {text: '->', id: 1},
                    {text: '>', id: 2},
                    {text: '=>', id: 3},
                    {text: '<', id: 4},
                ],
                selectedAnswer: null,
                id: 2,
            },
            {
                correctAnswers: [4],
                question: 'Which of the following method define default values for properties using props?',
                answers: [
                    {text: 'getWillState', id: 1},
                    {text: 'getInitialState', id: 2},
                    {text: 'getPropsValue', id: 3},
                    {text: 'getDefaultProps', id: 4},
                ],
                selectedAnswer: null,
                id: 3,
            },
            {
                correctAnswers: [2],
                question: 'Which is used to update the state?',
                answers: [
                    {text: 'setInitialnumber', id: 1},
                    {text: 'setState', id: 2},
                    {text: 'setnumber', id: 3},
                    {text: 'setNewnumber', id: 4},
                ],
                selectedAnswer: null,
                id: 4,
            },
            {
                correctAnswers: [3],
                question: 'Which of the following mounting methods are invoked before the component is inserted into DOM?',
                answers: [
                    {text: ' componentWillMount', id: 1},
                    {text: ' getInitialState, componentDidMount', id: 2},
                    {text: ' getInitialState, componentWillMount', id: 3},
                    {text: ' getInitialState', id: 4},
                ],
                selectedAnswer: null,
                id: 5,
            },
            {
                correctAnswers: [2],
                question: 'ReactJS renders Components start with?',
                answers: [
                    {text: 'Lowercase', id: 1},
                    {text: 'Uppercase', id: 2},
                    {text: 'curly brackets', id: 3},
                    {text: 'Variable', id: 4},
                ],
                selectedAnswer: null,
                id: 6,
            },
            {
                correctAnswers: [3],
                question: 'To achieve dynamic UI updates. Which of the following needs to be updated ?',
                answers: [
                    {text: 'render', id: 1},
                    {text: 'renderComponent', id: 2},
                    {text: 'state', id: 3},
                    {text: 'props', id: 4},
                ],
                selectedAnswer: null,
                id: 7,
            },
            {
                correctAnswers: [3],
                question: 'Which of the following represented the Pre and post life cycle methods of components ?',
                answers: [
                    {text: 'Before, After', id: 1},
                    {text: 'getInitialState, componentWillMount', id: 2},
                    {text: 'Will, Did', id: 3},
                    {text: 'Mounting, Unmounting', id: 4},
                ],
                selectedAnswer: null,
                id: 8,
            },
            {
                correctAnswers: [1],
                question: 'Which of the following methods used for state of the component?',
                answers: [
                    {text: 'setState,forceUpdate', id: 1},
                    {text: 'getPropsValue', id: 2},
                    {text: 'getInitialState', id: 3},
                    {text: 'getStateValue', id: 4},
                ],
                selectedAnswer: null,
                id: 9,
            },
            {
                correctAnswers: [2],
                question: 'Which of the following is not components of Redux?',
                answers: [
                    {text: 'View', id: 1},
                    {text: 'State', id: 2},
                    {text: 'Reducer', id: 3},
                    {text: 'Action', id: 4},
                ],
                selectedAnswer: null,
                id: 10,
            },
            {
                correctAnswers: [2],
                question: 'Once you create an element, React you can’t change its children or attributes?',
                answers: [
                    {text: 'False', id: 1},
                    {text: 'True', id: 2},
                ],
                selectedAnswer: null,
                id: 11,
            },
            {
                correctAnswers: [2],
                question: 'JSX is necessary to work with React.js?',
                answers: [
                    {text: 'False', id: 1},
                    {text: 'True', id: 2},
                ],
                selectedAnswer: null,
                id: 12,
            },
            {
                correctAnswers: [2],
                question: 'Which of the following is the correct data flow sequence of flux concept?',
                answers: [
                    {text: 'Dispatcher->Action->Store->View', id: 1},
                    {text: 'Action->Dispatcher->Store->View', id: 2},
                    {text: 'Action->Dispatcher->View->Store', id: 3},
                    {text: 'Action->Store->Dispatcher->View', id: 4},
                ],
                selectedAnswer: null,
                id: 13,
            },
            {
                correctAnswers: [4],
                question: 'Which of the following API is necessary for React.js component?',
                answers: [
                    {text: ' Props', id: 1},
                    {text: ' RenderComponent', id: 2},
                    {text: ' State', id: 3},
                    {text: ' Render', id: 4},
                ],
                selectedAnswer: null,
                id: 14,
            },
            {
                correctAnswers: [2],
                question: 'In component lifecycle which one is executed before rendering?',
                answers: [
                    {text: ' componentDidMount', id: 1},
                    {text: ' componentWillMount', id: 2},
                    {text: ' componentWillReceiveProps', id: 3},
                    {text: ' shouldComponentUpdate', id: 4},
                ],
                selectedAnswer: null,
                id: 15,
            },
            {
                correctAnswers: [3],
                question: 'Which helps react for keeping their data unidirectional?',
                answers: [
                    {text: 'Props', id: 1},
                    {text: 'Dom', id: 2},
                    {text: 'Flux', id: 3},
                    {text: 'JSX', id: 4},
                ],
                selectedAnswer: null,
                id: 16,
            },
            {
                correctAnswers: [2],
                question: 'Life cycle methods of a components fall under following categories?',
                answers: [
                    {text: 'None of these', id: 1},
                    {text: 'Mounting, Updating, Unmounting', id: 2},
                    {text: 'Mounting, Unmounting', id: 3},
                    {text: 'Mounting, Updating', id: 4},
                ],
                selectedAnswer: null,
                id: 17,
            },
            {
                correctAnswers: [4],
                question: 'What is the name of React.js Developer ?',
                answers: [
                    {text: 'Jordan Lee', id: 1},
                    {text: 'Tim Lee', id: 2},
                    {text: 'Jordan mike', id: 3},
                    {text: 'Jordan Walke', id: 4},
                ],
                selectedAnswer: null,
                id: 18,
            },
            {
                correctAnswers: [3],
                question: 'Which is used to pass the data from parent to child?',
                answers: [
                    {text: 'render', id: 1},
                    {text: 'Components', id: 2},
                    {text: 'props', id: 3},
                    {text: 'state', id: 4},
                ],
                selectedAnswer: null,
                id: 19,
            }],
    },
    htmlQuiz: {
        id: "Html",
        quizTitle: "Html Quiz",
        tests: [
            {
                correctAnswers: [1],
                question: 'What does HTML stand for?',
                answers: [
                    {text: 'Hyper Text Markup Language', id: 1},
                    {text: 'Home Tool Markup Language', id: 2},
                    {text: 'Hyperlinks and Text Markup Language', id: 3},
                ],
                selectedAnswer: null,
                id: 0,
            },
        ],
    },
    cssQuiz: {
        id: "Css",
        quizTitle: "Html Quiz",
        tests: [
            {
                correctAnswers: [1],
                question: 'What does HTML stand for?',
                answers: [
                    {text: 'Hyper Text Markup Language', id: 1},
                    {text: 'Home Tool Markup Language', id: 2},
                    {text: 'Hyperlinks and Text Markup Language', id: 3},
                ],
                selectedAnswer: null,
                id: 0,
            },
        ],
    },
};

export const quiz = (state = initialState, action) => {
    switch (action.type) {
        case quizActionTypes.ADD:
            return {

            };
        default:
            return state
    }
};

export const getReactQuiz = state => state.reactQuiz;
export const getHtmlQuiz = state => state.htmlQuiz;
export const getCssQuiz = state => state.cssQuiz;

