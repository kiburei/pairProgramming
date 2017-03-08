$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    var students = ["Andrew", "Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin", "Yonko", "Keneth", "Minner", "Ken", "Vivian", "Isiah", "Gor"];
    var uname = $("#inputUsername").val();
    var pword = $("#inputPassword").val();

    if (students.includes(uname) && pword === "p") {
      $(".success").text("Log in successfull");
      window.location.replace("home.html");
      var pairs = pairwise(students);

      console.log(days(pairs));



    } else {
      $(".success").text("Username or Passord does not match");

    }



  });

});


// get all possible combinations of pairs from call list
function pairwise(list) {
  if (list.length < 2) { return []; }
  var first = list[0],
      rest  = list.slice(1),
      pairs = rest.map(function (x) { return [first, x]; });
  return pairs.concat(pairwise(rest));
}

// make arrays for all days
function days(pairs) {
  var students = ["Andrew", "Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin", "Yonko", "Keneth", "Minner", "Ken", "Vivian", "Isiah", "Gor"];
  debugger;
    var monday = [];
    // pick names once and return with first pair
    monday.push(pairs[0]);
    for (var i = 0; i < students.length; i++) {
       if (monday[i].includes(students[i] && students[i + 2])) {
         console.log(monday[i]);
          // Find next student in List who is not in monday
          var next = students[i + 2];
          monday.push[p[i + 2]];

       }

    }
  }

// Check if Name already paird





//
// for (var i = 0; i < p.length; i++) {
//   console.log(p[i]);
// }
