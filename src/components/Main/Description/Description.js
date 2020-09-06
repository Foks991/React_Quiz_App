import React from "react";
import Step from "./Step/Step";
import { getStepsState } from "../../../store/rootReducer";
import { connect } from 'react-redux';

const Description = ({stepState}) => {

  return (

      <div className={'description-wrap'}>
        <div className={'description'}>
          <h1>Welcome to our online Test series. Here you can test your Skill and see how much you know about.</h1>
        </div>

        <div className={'quiz-step-wrap'}>
          {stepState.map((el, index) => <Step
            key={el + index}
            url={el.url}
            title={el.title}
            description={el.description}
            remark={el.remark}
          />)}
        </div>

      </div>
  )
};

const mapStateToProps = (state) => ({
  stepState: getStepsState(state)
});

export default connect(mapStateToProps, null)(Description);