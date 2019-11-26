var APIKey = "17bc6b3b7f3e498ad7423208cfc28809"
var accukey = "	uIGrHfeAuABOGbjzAYMdcbDPwpawFiJ7"

var currenturl = "http://dataservice.accuweather.com/locations/v1/cities/search" + accukey
var fiveday = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + accukey
var uvindex = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}" + APIKey

//need to make the button get the data on the click!! That goes RIGHT HERE BUDDY

$("#lebutton").click(function()
{

$.ajax({
    url: currenturl,
    method: "GET"
  }).then(function(response) {
    console.log(currenturl);
    console.log(response);
  


    $("#theArea").html("<h1>" + response.LocalizedName + "Weather Details</h1>");
    $("theTemp").html("<p1>" + response.temp + "<p1>");
    $("theHumidity").html("<p2>" + response.humidity + "<p2>");
    $("theWind").html("<p3>" + response.wind + "<p3>");
    $("theUV").html("<p4>" + response.uvindex + "<p4>");  
  })
})

 