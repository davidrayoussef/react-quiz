const shuffleQuestions = array => {
  let shuffled = [];
  array
    .map((item, index, array) => {
      shuffled.push(array[Math.floor(Math.random() * array.length)]);
    });

  return shuffled.filter((item, index, array) => {
      return index === array.indexOf(item);
    }).slice(0,10);
};

export default shuffleQuestions;
