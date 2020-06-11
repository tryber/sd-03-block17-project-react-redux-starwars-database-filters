const retornaSign = (comparison)=> {
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
  }
  
  const filtraDataNumeric = (comparisonSignal, results, column, value) =>  { 
          if (comparisonSignal === 0) {
          return results.filter((element) => element[column] > value);
        } if (comparisonSignal === 1) {
          return results.filter((element) => element[column] < value);
        } if (comparisonSignal === 2) {
          return results.filter((element) => element[column] === value);
        }
        return results;
      }
  

    export  { retornaSign , filtraDataNumeric } ;