const shuffleQuestions = (arr, limit = arr.length) => {
  return arr
    .sort((a,b) => Math.random() < .5 ? 1 : -1)
    .slice(0, limit);
};

export default shuffleQuestions;
