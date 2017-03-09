$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    var students = ["Andrew", "Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin", "Yonko", "Keneth", "Minner", "Ken", "Vivian", "Isiah", "Gor"];
    var uname = $("#inputUsername").val();
    var pword = $("#inputPassword").val();

    if (students.includes(uname) && pword === "p") {
      $(".success").text("Log in successfull");
      window.location.replace("home.html");

    } else {
      $(".success").text("Username or Passord does not match");

    }



  });

});
