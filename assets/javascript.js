var APIKey = "17bc6b3b7f3e498ad7423208cfc28809";

var queryurl = "api.openweathermap.org/data/2.5/forecast?q={city},{country}" + APIKey

//need to make the button get the data on the click!! That goes RIGHT HERE BUDDY


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    $(".city").html("<h1>" + response.name + "Weather Details</h1>");
  })