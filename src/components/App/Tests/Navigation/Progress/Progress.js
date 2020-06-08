import React from 'react'

export default function Progress({ quiz }) {

    const quizPercentDone = () => {
        const answersCount = quiz.length;
        const completedTestsCount = quiz.filter(item => item.selectedAnswer !== null);
        const percentage = (completedTestsCount.length * 100) / answersCount;

        return (!Number.isInteger(percentage)) ? percentage.toFixed(1) : percentage;
    };

    return (
        <div className={'progress-block'}>
            <div className={'progress-status'}>
                <p>Progress:</p>
                <p>{quizPercentDone()}%</p>
            </div>
            <div className={'progress'}>
                <div className={'current'} style={{'width': quizPercentDone()+'%'}}> </div>
            </div>
        </div>
    )
}
