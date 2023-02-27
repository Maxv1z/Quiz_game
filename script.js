
  /*Creating variables, which are equal to html elements */
var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var count = 0;
var scoreCount = 0;
var qaSets = document.querySelectorAll('.qa_set');
//                                                       //

qaSets.forEach(function(qaSet) { // going through all sets with Q and A
  var qaAnsRow = qaSet.querySelectorAll('.qa_ans_row input'); // choose every block with radio/answer
  var selectedAnswers = null; 
  
  qaAnsRow.forEach(function(qaAnsRowSingle) { // Going via particular block of Q and A
    qaAnsRowSingle.addEventListener('click', function(){
      setTimeout(function(){
        step();
      }, 500)
      
      if (!selectedAnswers) {
        selectedAnswers = this;
        
        let valid = this.getAttribute("valid"); // right answer

        if (valid == "valid"){ // if right answer
          scoreCount += 20;
          score.innerHTML = scoreCount;
          totalScore.innerHTML = scoreCount;
        }
        else{ // wrong answer
          scoreCount += 0;
          score.innerHTML = scoreCount;
          totalScore.innerHtml = scoreCount;
        }
        
        qaAnsRow.forEach(function(qaAnsRowSingle) { // disableing other optins if the answer is chosen
          if (qaAnsRowSingle !== selectedAnswers) {
            qaAnsRowSingle.disabled = true;
          }
        });
      }
    });
  });
});

function step() {
  count += 1;
  for(let i = 0; i < qaSets.clientHeight; i++){
    qaSets[i].setAttribute("display","block");
  }
  qaSets[count].setAttribute("display", "none");
}
