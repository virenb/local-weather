$(document).ready(function() {

    var long;
    var lat;
    var far;
    var cel;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            long = position.coords.longitude;
            lat = position.coords.latitude;

        var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=10e4c6e7a832a09119e2aff8314c5371"


    $.getJSON(api, function(data) {
            var weatherType = data.weather[0].descirption;
                var kelvin = data.main.temp;
                var windSpeed = data.wind.speed;
                var city = data.name;

            far = (kelvin)*(9/5)-459.67;

    });
});
