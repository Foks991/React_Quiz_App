import React from "react";

const Step = ({...props}) => {

  const { url, title, description, remark } = props;

  return (
    <div className={'quiz-step'}>
      <img className={'quiz-step-img'} src={url} alt=""/>
      <p className={'quiz-step-title'}>{title}</p>
      <p className={'quiz-step-description'}>{description}</p>
      {remark ? <p className={'quiz-step-remark'}>{remark}</p> : null}
    </div>
  )

};

export default Step
