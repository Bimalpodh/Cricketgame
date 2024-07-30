
let scorestr=localStorage.getItem('score');
let score;
resetscore(scorestr);
function resetscore(scorestr){
  
  score= scorestr ? JSON.parse(scorestr):{
      win:0,
      loss:0,
      tie:0,
    
  }
//if(scorestr !==undefined){
//  score=JSON.parse(scorestr)
//}else{
//  score={
//    win:0,
//    loss:0,
//    tie:0,
//  
//  };
//}
  score.displayScore=function(){
    return`won:${score.win},lost:${score.loss},tie:${score.tie} `
  };
  showResult();

};
function generateComputerChoice(){
  let randomNum=Math.random()*3;
    if(randomNum>0 && randomNum<=1){
      return'Bat';
    }else if(randomNum >1 && randomNum<=2){
       return'Ball';
    }
    else{
      return'Stump';
    }
    
}


function getResult(userMove, compMove ){
  //for bat
  if(userMove==='Bat'){
    if(compMove==='Ball'){
      score.win++;
      return('player won');
    }
    else if(compMove==='Bat'){
      score.tie++;
      return('you are tie');
      
    }
    else{
      score.loss++;
      return('Computer has won')
    }
    
  }
  //for ball 
  else if(userMove==='Ball'){
    if(compMove==='Ball'){
      score.tie++;
      return('You are tie');
    }
    else if(compMove==='Bat'){
      score.loss++;
      return('Computer won');
    }
    else if(compMove==='Stump'){
      score.win++;
      return('Player Won');
    }
  }
  // for stump
  else{
    if(compMove==='Ball'){
      score.win++;
     return('Player won');
    }
    else if(compMove==='Bat'){
      score.loss++;
      return('Computer won');
    }
    else if(compMove==='Stump'){
      score.tie++;
      return('You are tie');
    }
  }
 
}
function showResult(userMove,comptMove,resultMsg){
  localStorage.setItem('score',JSON.stringify(score));
  
  console.log(score);
  //user choice
  document.querySelector('#userMove').innerText= userMove !== undefined ?`you have choosen ${userMove}`:'' ;
  //computer choice
  document.querySelector('#computerMove').innerText = comptMove !== undefined ? `Computer have choosen ${comptMove}`:'';
 //result 
  document.querySelector('#result').innerText=resultMsg !== undefined ?resultMsg :'';

//score
  document.querySelector('#score').innerText=score.displayScore();
  
  
}

