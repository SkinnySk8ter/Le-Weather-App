var APIKey = "17bc6b3b7f3e498ad7423208cfc28809"
var accukey = "	uIGrHfeAuABOGbjzAYMdcbDPwpawFiJ7"
var weatherkey = "24ad5ab3a8c147729528340b69352ccb"

// var currenturl = "http://dataservice.accuweather.com/locations/v1/cities/search" + accukey
var fiveday = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/{348707}" + accukey
var currentweather = "https://api.weatherbit.io/v2.0/current?city=Baltimore,MD&key=weatherkey"
// var uvindex = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}" + APIKey

//need to make the button get the data on the click!! That goes RIGHT HERE BUDDY

$("#lebutton").click(function()
{

$.ajax({
    url: currentweather,
    method: "GET"
  }).then(function(response) {
    console.log(currentweather);
    console.log(response);
  


    // $("#theArea").html("<h1>" + response.LocalizedName + "Weather Details</h1>");
    // $("theTemp").html("<p1>" + response.temp + "<p1>");
    // $("theHumidity").html("<p2>" + response.humidity + "<p2>");
    // $("theWind").html("<p3>" + response.wind + "<p3>");
    // $("theUV").html("<p4>" + response.uvindex + "<p4>");  
  })
})

 