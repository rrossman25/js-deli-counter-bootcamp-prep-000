function takeANumber(currentNum, name){
  for (let i = 0; i < currentNum.length; i++){
    return `Welcome, ${name}. You are number ${i+1} in line`;
  }
}

function nowServing(currentNum){
  let i = 0;
  while (currentNum.length > 0){
      return currentNum[i];
      currentNum.shift();
  }
  if (currentNum.length === 0){
    return "There is nobody waiting to be served";
  }
  
}