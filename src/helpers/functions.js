const retornaSign = (comparison) => {
  let comparisonSignal;
  if (comparison === 'maior que') {
    comparisonSignal = 0;
    console.log("retornaSign" + comparisonSignal);
    return comparisonSignal;
  } if (comparison === 'menor que') {
    comparisonSignal = 1;
    return comparisonSignal;
  } if (comparison === 'igual a') {
    comparisonSignal = 2;
    return comparisonSignal;
  }
  return null;
};

const filtraData = (comparisonSignal, results, column, value) => {
  if (comparisonSignal === 0) {
    console.log("filtraData" + comparisonSignal);
    return results.filter((element) => parseFloat(element[column]) > parseFloat(value));
  } if (comparisonSignal === 1) {
    return results.filter((element) => parseFloat(element[column]) < parseFloat(value));
  } if (comparisonSignal === 2) {
    return results.filter((element) => parseFloat(element[column]) === parseFloat(value));
  }
  return results;
};

const sendObject = (state, action) => {
  const sign = retornaSign(action.comparison);
  let filteredValues = null;
  filteredValues = filtraData(sign, state.data.results, action.column, action.value);
  console.log(filteredValues);
  return filteredValues; 
};

export { retornaSign, filtraData, sendObject };
