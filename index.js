function takeANumber(currentNum, name){
  currentNum.push(name);
  for (let i = 0; i < currentNum.length; i++){
    if (currentNum[i] === name){
      return `Welcome, ${name}. You are number ${i+1} in line`;
    }
  }
}

function nowServing(currentNum){
  if (currentNum.length === 0){
    return "There is nobody waiting to be served";
  }
  else{
     let i = 0;
     while (currentNum.length > 0){
       let now = currentNum[i];
       currentNum.shift();
       return `Currently serving ${now}.`;
     }
  }
}

function currentLine(currentNum){
  if (currentNum.length === 0){
    return "The line is currently empty."
  }
  else{
    for (let i = 0; i < currentNum.length; i++){
      return `The line is currently: ${i+1}. ${currentNum[i]},`
    }
  }
}