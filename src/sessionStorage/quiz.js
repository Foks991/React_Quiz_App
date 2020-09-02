export const setQuizToStorage = (quizId) => sessionStorage.setItem('currentQuiz', quizId);
export const getQuizFromStorage = () => sessionStorage.getItem('currentQuiz');

export const setMinutesToStorage = (minutes) => sessionStorage.setItem('currentQuizMinutes', minutes);
export const setSecondsToStorage = (seconds) => sessionStorage.setItem('currentQuizSeconds', seconds);

export const getMinutesToStorage = () => sessionStorage.getItem('currentQuizMinutes');
export const getSecondsToStorage = () => sessionStorage.getItem('currentQuizSeconds');
