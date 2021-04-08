var readLineSync = require('readline-sync');
var score = 0;
var highScorer ={
  playerName:"Mondar",
  score:4,
}
function play(queList){
 for(i=0; i<queList.length; i++){
  var askQue = quizzie(queList[i]);
  if(askQue === "Yes"){
  console.log("Correct answer");
  score = score+1;
  }
  else{
    console.log("wrong answer");
  }
}
}

function quizzie(ask){
  var userAns = readLineSync.question(ask.question);
  var ans = ask.answer
  if(userAns.toUpperCase() === ans.toUpperCase()){
    var result = "Yes";
  }
  else{
    var result = "No";
  }
  return result;
}
var questionOne = {
  question: "Who is my favorite superhero? ",
  answer: "Spiderman",
}

var questionTwo = {
  question: "Which is my favorite roamntic song? ",
  answer: "Char Kadam",
}

var questionThree ={
   question: "Where do I belong from? ",
  answer: "Kolkata",
}

var questionFour ={
   question: "What is my favourite food? ",
  answer: "Caesar salad",
}

var questionFive ={
   question: "What is my car model? ",
  answer: "Ciaz",
}

var queList = [questionOne, questionTwo, questionThree, questionFour, questionFive];


play(queList);
if (score>=highScorer.score){
  console.log("Congrats! you are the highest scorer now and your score is", score);
}
else{
 console.log("your score is " + score + "and highest score is " + highScorer.score + " by " + highScorer.playerName);
}
