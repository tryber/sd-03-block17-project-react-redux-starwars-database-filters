const retornaSign = (comparison) => {
  let comparisonSignal;
  if (comparison === 'maior que') {
    comparisonSignal = 0;
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

const filtraDataNumeric = (comparisonSignal, results, column, value) => {
  if (comparisonSignal === 0) {
          return results.filter((element) => element[column] > value);
          } if (comparisonSignal === 1) {
          return results.filter((element) => element[column] < value);
        } if (comparisonSignal === 2) {
          return results.filter((element) => element[column] === value);
        }
  return results;
}
  
      const sendObject = (state,action) =>  {
        const sign = retornaSign(action.comparison);
        let filteredValues = null;
                filteredValues = filtraDataNumeric(sign,state.data.results,action.column,action.value);
          return {
            ...state,
            filteredPlanets: { results: filteredValues },
          };
      }  

    export  { retornaSign , filtraDataNumeric , sendObject } ;