const numbers=[1,2,3,4];

function double([...rest]){
  let [number, ...remaining]= [...rest];
  let newNumber = number*2;
  if([...remaining].length==0){
    return [newNumber];
  }
  return [newNumber, ...double([...remaining])]
}

const doublenumbers = double(numbers);
