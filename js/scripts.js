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
      var day = days(pairs);

      $("#pair").text(students[0] + " and " + students[1]);



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
    var current_day = [];
     for (var i = 0; i < students.length; i++) {
       console.log(current_day.push(pairs[]));
     }

  }
