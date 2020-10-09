module.exports = function check(str, bracketsConfig) {
  let pairs = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    pairs.push(bracketsConfig[i].join(''), '');
  }

  for (let i = str.length; i >= 0; i--) {
    for (let j = 0; j < pairs.length; j++) {
      str = str.replace(pairs[j], '');
    }
  }

  return str.length > 0 ? false : true;
}
