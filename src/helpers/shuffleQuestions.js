const shuffleQuestions = (arr) => {
  return arr
    .sort((a,b) => Math.random() < .5 ? 1 : -1)
    .slice(0,10);
};

export default shuffleQuestions;
