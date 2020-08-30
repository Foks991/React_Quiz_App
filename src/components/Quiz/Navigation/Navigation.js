import React from 'react';
import Timer from "./Timer/Timer";
import NavList from "./NavList/NavList";
import Progress from "./Progress/Progress";

export default ({quiz, activeQuestion, chooseQuestion}) =>
  (
    <>
      <Timer/>
      <NavList
        quiz={quiz}
        activeQuestion={activeQuestion}
        chooseQuestion={chooseQuestion}
      />
      <Progress
        quiz={quiz}
      />
    </>
  );

