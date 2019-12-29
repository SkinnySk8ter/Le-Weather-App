let APIKey = "17bc6b3b7f3e498ad7423208cfc28809"
let accukey = "	uIGrHfeAuABOGbjzAYMdcbDPwpawFiJ7"
let weatherkey = "24ad5ab3a8c147729528340b69352ccb"
let cityCurrent = $(this).attr("data-city");

let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityCurrent + "&units=imperial&appid=" + APIKey;

let fiveday = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/{348707}" + accukey
let currentweather = "https://api.weatherbit.io/v2.0/current?city=Baltimore,MD&key=weatherkey"
// var uvindex = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}" + APIKey
let thecity = "http://api.weatherbit.io/v2.0/current" 

//need to make the button get the data on the click!! That goes RIGHT HERE BUDDY

$(".lebutton").click(function()
{

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
  


    $("#theArea").html("<h1>" + response.city_name + "Weather Details</h1>");
    $("theTemp").html("<p1>" + response.temp + "<p1>");
    $("theHumidity").html("<p2>" + response.rh + "<p2>");
    $("theWind").html("<p3>" + response.wind_spd + "<p3>");
    $("theUV").html("<p4>" + response.uvindex + "<p4>");  
  })
})

 