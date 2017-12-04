$(document).ready(function() {
  var flavors = ['chocolate', 'vanilla', 'strawberry', "cherry", "pistachio", "mint", "lemon"];
  //iterating through an array
  flavors.forEach(function(flavor) {
    $("#results").append("<li>I like " + flavor + " ice cream</li>"); //programmatically building an interface
  });
});
