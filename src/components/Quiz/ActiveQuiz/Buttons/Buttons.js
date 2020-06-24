import React from 'react';

export default ({prevQuestion, finishTest, nextQuestion, checkAllAnswers, fastFinishTest}) =>
    <div className={'buttons-block'}>

        {!checkAllAnswers() ?
            <div style={{'backgroundColor': '#16BE00'}} className={"button-item btn-1"} onClick={finishTest}>Закончить тест</div>
            :
            <>
                <div className={"button-item btn-1"} onClick={prevQuestion}>Назад</div>
                <div className={"button-item btn-1"} onClick={nextQuestion}>Вперёд</div>
            </>}
        {/*<div className={"button-item btn-1"} onClick={fastFinishTest}>Fast Finish</div>*/}
    </div>




