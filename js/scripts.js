//Pricing logic

var regPrice = "$20.00";
var matPrice = "$4.00";
var youthPrice = "$10.00";

function Order(movie, time, age) {

  this.movie = movie;
  this.time = time;
  this.age = age;

}

var ageRestrict = ""

Order.prototype.calcCost = function(time, age, movie) {

  if ((this.time === "morning" || this.time ===  "matinee") && this.age !== "youth") {
    return matPrice;
  } else {
     if (this.age === "youth" && this.movie === "3") {
       ageRestrict = "You're not old enough to view this film. BUSTED."
     } else if (this.age === "youth") {
       return youthPrice;
     } else {
       return regPrice;
     }
  }
}


//User interface logic ------------
$(document).ready(function() {
  $("form#movieTickets").submit(function(event) {

    event.preventDefault();
    //$("#ticketPrice").text("");
    //$("#ageRestriction").empty();

    // $(".priceOutput").empty();
    //location.reload();

    var movie = $("input:radio[name=movie]:checked").val();
    //console.log(movie);
    var time = $("input:radio[name=time]:checked").val();
    //console.log(time);
    var age = $("input:radio[name=age]:checked").val();
    //console.log(age);
    var newOrder = new Order(movie, time, age);
    //console.log(newOrder);
    var price = newOrder.calcCost(time, age, movie);
    $("#ticketPrice").text(price);

    if (ageRestrict !== "") {
      $("#ageRestriction").text(ageRestrict);
    }

  });
});
