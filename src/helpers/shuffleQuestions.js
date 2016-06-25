const shuffleQuestions = array => {
  let shuffled = [];
  array.map((item, index, array) => {
    shuffled.push(array[Math.floor(Math.random() * array.length)]);
  });
  return Array.from(new Set([...shuffled]));
};

export default shuffleQuestions;
