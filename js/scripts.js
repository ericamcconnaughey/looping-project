//Business Logic
var nums = [];
var str = '<ul>';


var beepBoop = function(num) {
  for (let currentNum = 0; currentNum <= num; currentNum++) {
    if (currentNum.toString().includes("1")) {
      nums.push("Beep!");
    } else {
    nums.push(currentNum);
    }
  }
  return nums;

  // if () {

  // } else {
    
  // }

  // if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
  //   return true;
  // } else {
  //   return false;
  // }
};



//User Interface Logic
$(document).ready(function() {
  $("form#machine").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);

    //clear previous result

    //show current result
    $("#result").text(result);
  })
})
