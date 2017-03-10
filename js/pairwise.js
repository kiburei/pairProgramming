$(document).ready(function(){
  $("#pairs").submit(function(event){
    event.preventDefault();
    var student = $("#pair").val();

    var myPairs = ["Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin"];

    var partner = pair(student);
    if (myPairs.includes(partner) || partner === student) {
      alert("You out of luck");
      partner = pair(student);
    }
    myPairs.push(partner);
    console.log(myPairs);
    $("#match").text(student + " pairs with " + partner);

  });
});

// Business Logic
var pair = function(student){
  var prep = ["AK47 Majid", "Andrew", "Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin", "Yonko", "Jaden", "Minneh", "Ken", "Vivian", "Isiah", "Gor"];
  // debugger;
  var myPairs = ["Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin"];
  var pairsInJson;
  // Pick random class mate
   var partner = _.sample(prep);
  //  Check if class mate is paired with before or if classmate is yourself
   if (myPairs.includes(partner) || partner === student) {
    //  alert("finding other match");
     var partner = _.sample(prep);
      //  var index = prep.indexOf(partner);
       //  add student to paired list
          // if (index !== -1) {
          //     myPairs.push(partner);
              // pairsInJson = Object.assign({}, myPairs);
              // alert(pairsInJson);
              // console.log(myPairs);
          }
          return partner;
   }
