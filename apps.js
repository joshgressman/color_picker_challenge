
$(document).ready(function(){


var colors =["green", "blue", "red", "yellow", "pink","black"];
//Function creates box divs with ID and background color from array
function theBoxes () {
  for(var i = 0; i < colors.length; i++){
    //inline styles to set id and class to box elements. id used for switch
$("#colorBox").append('<div class="box" id = '+colors[i]+' style="background:'+colors[i]+'"><div>');

}

  }
//this call creates the boxes from color array. add colors to array to add box.
  theBoxes();


  function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min + min));


}
//new array stores colors array
var thePick = colors;
console.log(thePick);
//stores random number will change each page refresh
var number =(randomNumber(0, 5));
console.log(number);
//color takes the value of the number applies to thePick array will change
var color = thePick[number];
console.log('color',color);
//adds the color in to be picked
$('#span').text(color);



// var msg = "";

$('#colorBox').on('click', '.box', function(){
//console.log(this);

// console.log($(this).attr("id"));
//If is checking if this colorBox attribute matches "id in the swittch"
  if(color == $(this).attr("id")){
        switch($(this).attr("id")) {

        case "green":
        alert("Correct! Great Job Keep Going");
        location.reload();
        break;

        case "blue":
         alert("Correct! Great Job Keep Going");
         location.reload();
        break;

        case "red":
        alert("Correct! Great Job Keep Going")
         location.reload();
        break;

        case "yellow":
        alert("Correct! Great Job Keep Going");
         location.reload();
        break;
        case "pink":
        alert("Correct! Great Job Keep Going")
         location.reload();
        break;
        case "black":
        alert("Correct! Great Job Keep Going");
         location.reload();
        break;
      }
} else {
  alert("WRONG! Are you color blind?");
  location.reload();
}
      $('#h3').text(msg);
});

//function ready
});
