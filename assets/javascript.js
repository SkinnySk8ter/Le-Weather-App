var APIKey = "17bc6b3b7f3e498ad7423208cfc28809"

var currenturl = "http://api.openweathermap.org/data/2.5/weather?q={city name}" + APIKey
var fiveday = "http://api.openweathermap.org/data/2.5/forecast?q={city name},{country code}" + APIKey
var uvindex = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}" + APIKey

//need to make the button get the data on the click!! That goes RIGHT HERE BUDDY



$.ajax({
    url: currenturl,
    method: "GET"
  }).then(function(response) {
    console.log(currenturl);
    console.log(response);

    $("#theArea").html("<h1>" + response.name + "Weather Details</h1>");
  })

  $("btn").click(function(){

    $("this").load;

  })