$(document).ready(function() {
  var number = parseInt(prompt("What number should I ping-pong up to?"))

  for(n = 1; n <= number; n += 1) {
    if (n % 15 === 0) {
      $("#numlist").append("<li>" + "ping-pong!" + "</li>");
    } else if (n % 5 === 0) {
      $("#numlist").append("<li>" + "pong!" + "</li>");
    } else if (n % 3 === 0) {
      $("#numlist").append("<li>" + "ping!" + "</li>");
    } else {
      $("#numlist").append("<li>" + n + "</li>");
    }

  }

});
