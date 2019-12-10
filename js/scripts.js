//Business Logic
var nums = [];

var beepBoop = function(num) {
  for (let currentNum = 0; currentNum <= num; currentNum++) {
    if (currentNum.toString().includes("3")) {
      nums.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (currentNum.toString().includes("2")) {
      nums.push("Boop!");
    } else if (currentNum.toString().includes("1")) {
      nums.push("Beep!");
    } else {
    nums.push(currentNum);
    }
  }
  return nums.join(", ");
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
