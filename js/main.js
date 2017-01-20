$(document).ready(function() {

    var long;
    var lat;
    var far;
    var cel;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            long = position.coords.longitude;
            lat = position.coords.latitude;

            var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=10e4c6e7a832a09119e2aff8314c5371"


            $.getJSON(api, function(data) {
                var weatherType = data.weather[0].description;
                var kelvin = data.main.temp;
                var windSpeed = data.wind.speed;
                var city = data.name;
                var tempSwitch = true;

                far = ((kelvin) * (9 / 5) - 459.67).toFixed(1);
                cel = (kelvin - 273).toFixed(1);
                windSpeed = (2.237 * (windSpeed)).toFixed(1);

                $("#city").html("Your Location: " + city);
                $("#weatherType").html("Conditions: " + weatherType);
                $("#far").html(far + " &#8457;");
                $("#switch-btn").click(function() {
                    if (tempSwitch === false) {
                        $("#far").html(far + " &#8457;");
                        tempSwitch = true;
                    } else {
                        $("#far").html(cel + " &#8451;");
                        tempSwitch = false;
                    }
                });
                $("#windSpeed").html("Wind: " + windSpeed + " mph");
                if (far > 70) {
                    $('body').css('background-image', 'url("https://i.imgur.com/93Qdu1a.jpg")');
                } else if (far > 40) {
                    $('body').css('background-image', 'url("https://i.imgur.com/yOhjACs.jpg")');
                } else {
                    $('body').css('background-image', 'url("https://i.imgur.com/X9qe0dl.jpg")');
                }

            });
        });
    }
});
