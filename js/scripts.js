$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    var students = [];
    var uname = $("#inputUsername").val();
    var pword = $("#inputPassword").val();

    if (student.firstName.includes(uname) && pword === student.password) {
      $(".success").text("Log in successfull");
      window.location.replace("home.html");

    } else {
      $(".success").text("Username or Passord does not match");

    }



  });
    var match = pair(student.firstName);
    $("#pair").text(match);
});

var student = {
    firstName: ["Andrew", "Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin", "Yonko", "Keneth", "Minner", "Ken", "Vivian", "Isiah", "Gor"],
    lastName: "Moringa",
    password: "password",
    cohort: "mftp2",
    track: ["HTML","JavaScript","CSS"]
  };

var pair = function(std) {
  var pairs = [];
  pairs.push(_.sample(std, 2));
  return pairs[0];

}
