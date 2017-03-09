$(document).ready(function(){
  $("#pairs").submit(function(event){
    event.preventDefault();
    var student = $("#pair").val();

    var partner = pair(student);
    $("#match").text(student + " pairs with " + partner);

  });
});


var pair = function(student){
  var prep = ["AK47 Majid", "Andrew", "Sotty", "Mike", "Suheib", "Paul",  "Steve", "Kevin", "Tevin", "Yonko", "Keneth", "Minner", "Ken", "Vivian", "Isiah", "Gor"];
   var partner = _.sample(prep);
   if (student !== partner ) {
     var index = prep.indexOf(partner);
     //  remove student from list
        if (index !== -1) {
            prep.splice(index, 1);
            console.log(prep);
        }

        return partner;


   }

}
