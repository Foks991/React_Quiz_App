import React from 'react';

export default ({prevQuestion, finishTest, nextQuestion, checkAllAnswers, testBtn}) => {

    return (
        <div className={'buttons-block'}>
            <div className={"button-item btn-1"} onClick={prevQuestion}>Назад</div>
            {!checkAllAnswers() ? <div style={{'backgroundColor': '#16BE00'}} className={"button-item btn-1"} onClick={finishTest}>Закончить тест</div> : null}
            <div className={"button-item btn-1"} onClick={nextQuestion}>Вперёд</div>
            <div className={"button-item btn-1"} onClick={testBtn}>Fast Finish</div>

        </div>
    )

}

