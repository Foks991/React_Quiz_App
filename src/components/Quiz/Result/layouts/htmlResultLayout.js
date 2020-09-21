export const createHtmlLayout = (selectedQuizQuestions) =>
`<!DOCTYPE html>
<html lang="">
  <head>
    <title>Quiz Result</title>
  </head>
  <body>
    <div id="content" style="width: 1000px;  margin: 0 auto;"></div>
  </body>
  
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const content = document.getElementById("content");
      const quiz = \`${JSON.stringify(selectedQuizQuestions)}\`;
      
      const createQuestionBlock = (questionObj, quesNumber) => {
        const div = document.createElement("div");
        const question = document.createElement("p");
        const questionNumber = document.createElement("p");
        
        question.innerText = questionObj.question;
        questionNumber.innerText = 'Question: ' + quesNumber;
        questionNumber.style.fontSize = '20px';
        questionNumber.style.fontWeight = 'bold';
        questionNumber.style.borderBottom = '1px solid black';
        questionNumber.style.marginTop = '20px';
        questionNumber.style.paddingBottom = '10px';
       
       questionObj.answers.forEach((answer, i) => {
          const p = document.createElement("p");
          const span = document.createElement("span");
  
        p.innerText = questionObj.answers[i].text;
  
        if(i + 1 === questionObj.correctAnswers[0] && i + 1 === questionObj.selectedAnswer){
            p.style.backgroundColor = "#d4edda";
            p.appendChild(span);
            span.innerText = 'Your Answer';
        }else if(i + 1 !== questionObj.correctAnswers[0] && i + 1 === questionObj.selectedAnswer){
            p.style.backgroundColor = '#f8d7da';
            p.appendChild(span);
            span.innerText = 'Your Answer';
        } else if(i + 1 === questionObj.correctAnswers[0] && i + 1 !== questionObj.selectedAnswer){
            p.style.backgroundColor = '#dddddd';
            p.appendChild(span);
            span.innerText = 'Correct Answer';
        }
        
        p.style.margin = '2px';
        p.style.padding = '10px 0 10px 10px';
        p.style.fontSize = '16px';
        p.style.fontFamily = 'sans-serif';
        p.style.position = 'relative';
        
        span.style.position ='absolute';
        span.style.right = '20px';
        span.style.height = '28px';
        span.style.display = 'flex';
        span.style.color = 'white';
        span.style.top = '5px';
        span.style.backgroundColor = 'darkgray';
        span.style.padding = '0px 10px';
        span.style.fontSize = '18px';
        span.style.alignItems = 'center';
        span.style.justifyContent = 'center';
  
        div.appendChild(p);
       });
       
        div.prepend(question);
        div.prepend(questionNumber);
        content.appendChild(div);
      };
      
      const allQuestions = JSON.parse(quiz);
      allQuestions.forEach((el, i) => createQuestionBlock(allQuestions[i], i + 1))
    });
  
  </script>
</html>`;