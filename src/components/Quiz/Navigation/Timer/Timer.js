import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { connect } from 'react-redux';
import { getQuizIsDone } from "../../../../store/rootReducer";
import {quizActions} from "../../../../store/actions/quizActions";

const Timer = ({quizIsDone}) => {

  const minuteSeconds = 60;
  const hourSeconds = 1800;

  const timerProps = {
    isPlaying: true,
    size: 80,
    strokeWidth: 6,
    colors: [["#16be00"]]
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  const getTimeSeconds = time => (minuteSeconds - time / 1000) | 0;
  const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0;


  const stratTime = Date.now();
  const endTime = stratTime + 60 * 60;

  const remainingTime = endTime - stratTime;

  return (
    <div className="Timer">
      {!quizIsDone ?
        <>
          <CountdownCircleTimer
            {...timerProps}
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > minuteSeconds]}
          >
            {({elapsedTime}) => renderTime("min", getTimeMinutes(hourSeconds - elapsedTime / 1000))}
          </CountdownCircleTimer>

          <CountdownCircleTimer
            {...timerProps}
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
          >
            {({elapsedTime}) => renderTime("sec", getTimeSeconds(elapsedTime))}
          </CountdownCircleTimer>
        </>
        :
        <>
          <CountdownCircleTimer {...timerProps} colors={[["#be0011"]]}>{() => renderTime("min", 0)}</CountdownCircleTimer>
          <CountdownCircleTimer{...timerProps} colors={[["#be0011"]]}>{() => renderTime("sec", 0)}</CountdownCircleTimer>
        </>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  quizIsDone: getQuizIsDone(state)
});

export default connect(mapStateToProps)(Timer);
