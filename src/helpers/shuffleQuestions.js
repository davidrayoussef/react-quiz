const shuffleQuestions = (arr) => {
  return arr.sort((a,b) => Math.random() < .5 ? 1 : -1);
};

export default shuffleQuestions;
