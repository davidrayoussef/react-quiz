const tally = arr => {
  return arr.map(item => {
    return item.tries;
  }).reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

export default tally;
