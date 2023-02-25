
  /*Creating variables, which are equal to html elements */
var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var count = 0;
var scoreCount = 0;
var qaSets = document.querySelectorAll('.qa_set');
//                                                       //

qaSets.forEach(function(qaSet) {
  var qaAnsRow = qaSet.querySelectorAll('.qa_ans_row input');
  var selectedAns = null;
  
  qaAnsRow.forEach(function(qaAnsRowSingle) {
    qaAnsRowSingle.addEventListener('click', function(){
      if (!selectedAns) {
        selectedAns = this;
        
        let valid = this.getAttribute("valid");

        if (valid == "valid"){
          scoreCount += 20;
          score.innerHTML = scoreCount;
          totalScore.innerHTML = scoreCount;
        }
        else{
          scoreCount += 0;
          score.innerHTML = scoreCount;
          totalScore.innerHtml = scoreCount;
        }
        
        qaAnsRow.forEach(function(qaAnsRowSingle) {
          if (qaAnsRowSingle !== selectedAns) {
            qaAnsRowSingle.disabled = true;
          }
        });
      }
    });
  });
});
