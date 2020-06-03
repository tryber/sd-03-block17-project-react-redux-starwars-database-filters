const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const reduceTest = () => {
  return arr.reduce((acc, e) => {
    if (e % 3 === 0) acc.push(e);
    if (arr.length > 18) {
      if (e % 6 === 0) acc.push('kk');
      if (e % 8 === 0) acc.push(e);
    }
    return acc;
  }, []);
};

console.log(reduceTest());
