//Business Logic
let str = '<ul>';

var beepBoop = function(num) {
  let nums = [];
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
  //Submit Form
  $("form#machine").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("input#number").val());
    let result = beepBoop(number);
    let currentText = $("#result").text();
    let newText = currentText + result;
    $("#result").text(newText);
  })

  //Clear the Previous Result
  $("#clear-btn").click(function(event) {
    event.preventDefault();
    $("#result").empty();
  })
})
