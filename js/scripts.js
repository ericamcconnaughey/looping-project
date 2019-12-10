//Business Logic
var nums = [];
var str = '<ul>';

var beepBoop = function(num) {
  for (let currentNum = 0; currentNum <= num; currentNum++) {
    nums.push(currentNum);
  }
  return nums;

  // for (var product = 1; num > 0; num--) {
  //   product *= num; 
  // }
  // return product;
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

    //hide form
    $("#machine").hide();
    
    // $(".year").text(year);

    // if (!result) {
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }
    
    $("#result").text(result);
  })

})