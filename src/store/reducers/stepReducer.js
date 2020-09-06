import { images } from "../../helpers/imagesTransducer";

export const stepInitialState = {
  stepState : [
  {
    url: images.startTest1,
    title: "Start Test",
    description: "Test your knowledge on our page with a test.",
  },
  {
    url: images.startTest2,
    title: "Test",
    description: "The test contains questions and has no time limit. This is an informal test, but a great way to get a sense of your knowledge of this section.",
    remark: "The timer is added exclusively for content filling. After the end of the time, the timer will start counting again ;)"
  },
  {
    url: images.startTest3,
    title: "Count the points",
    description: "You will receive n% of each correct answer. At the end of the test, the total score will be calculated from 100%."
  }]
};

export default function (state = stepInitialState, action) {
  switch (action.type) {

    default:
      return state
  }
};

export const getStepsState = state => state.stepState;




