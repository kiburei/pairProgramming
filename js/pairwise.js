$(document).ready(function(){
  $("#pairs").submit(function(event){
    event.preventDefault();
    var student = $("#pair").val();

    var myPairs = ["Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin"];

    var partner = pair(student);
    if (myPairs.includes(partner) || partner === student) {
      alert("Can not be paired with " + partner);
      partner = pair(student);
    }
    myPairs.push(partner);
    console.log(myPairs);
    $("#match").text(student + " pairs with " + partner);

  });
});





var pair = function(student){
  var exPairs = [];
  var a = ["Sotty", "Mike", "Suheib", "Majid", "Minneh"];
  a.forEach(function(entry) {
      var exPairs = {}
      singleObj['paird?'] = 'Yes';
      singleObj['value'] = entry;
      exPairs.push(singleObj);
      console.log(exPairs);
  });

}

var pair = function(student){
  var prep = ["Majid", "Andrew", "Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin", "Yonko", "Jaden", "Minneh", "Ken", "Vivian", "Isiah", "Gor"];
  // debugger;
  var myPairs = ["Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin"];
  var pairsInJson;
  // Pick random class mate
   var partner = _.sample(prep);
  //  Check if class mate is paired with before or if classmate is yourself
   if (myPairs.includes(partner) || partner === student) {
     alert("Can not be paired with " + partner);
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
