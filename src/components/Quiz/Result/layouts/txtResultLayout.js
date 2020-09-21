export const createTxtLayout = questions => {
  const textForHtml = questions.map((questionObj, index) => {
    const correctAnswerIndex = questionObj.correctAnswers[0];
    const correctAnswer = questionObj.answers[correctAnswerIndex - 1].text;
    `\nQuestion ${index + 1}: ${questionObj.question} \nAnswer   ${index + 1}: ${correctAnswer} \n`
  });

  return textForHtml.join(' ');
};