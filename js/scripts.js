//Pricing logic

var regPrice = "$20.00";
var matPrice = "$4.00";
var youthPrice = "$10.00";

function Order(movie, time, age) {

  this.movie = movie;
  this.time = time;
  this.age = age;

}

Order.prototype.calcCost = function(time, age) {
  if (this.time === "morning") {
    return matPrice;
  } else {
    return "error"
  }

}

//var prices = ["regPrice", "matPrice", "youthPrice"];


// var regularPrice = function() {
//   if (age === "adult" && movie === "1" || "2" || "3" && time === "evening")
//     $(".ticketPrice").show(regPrice);
// };


//User interface logic ------------
$(document).ready(function() {
  //debugger;
  $("form#movieTickets").submit(function(event) {
    event.preventDefault();
    var movie = $("input:radio[name=movie]:checked").val();
    //console.log(movie);
    var time = $("input:radio[name=time]:checked").val();
    //console.log(time);
    var age = $("input:radio[name=age]:checked").val();
    //console.log(age);
    var newOrder = new Order(movie, time, age);
    //console.log(newOrder);
    var price = newOrder.calcCost(time, age);
    $("#ticketPrice").text(price);



    // var regularPrice = function() {
    //   if (age === "adult" && movie === "1" || "2" || "3" && time === "evening") {
    //     $("#ticketPrice").show(regPrice);
    //   }
    // }

    // function ticketPrices() {
    //   if (age === "adult" && movie === "1" || "2" || "3" && time === "evening") {
    //     $("#ticketPrice").show(regPrice);
    //     else if (age === "teen" && movie === "1" || "2" && time === "evening") {
    //       $("#ticketPrice").show(regPrice);
    //     else if (age === "youth" && movie === "1" && time === "") {
    //       $("#ticketPrice").show(regPrice);



  });
});
