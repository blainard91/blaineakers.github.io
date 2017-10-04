// Current Location Scripts
(function () {

    var status = document.getElementById('status');

    (function getGeoLocation() {
        status.innerHTML = 'Getting Location...';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    }());

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Get the data from the wunderground API
    function getData(lat, long) {
        var url = "http://api.wunderground.com/api/794a09013f9f2153/forecast/geolookup/conditions/q/" + lat + "," + long + ".json"; //change this to the correct URL for wunderground
        getJSON(url).then(function (data) {
            console.log(data);
            var city = data["location"]["city"];
            var state = data["location"]["state"];
            var temp = data["current_observation"]["feelslike_f"];
            var weather= data["current_observation"]["weather"];
            var precipToday = data["current_observation"]["precip_today_in"];
            var windmph = data["current_observation"]["wind_mph"];

            var cityDisplay = document.getElementById('cityDisplay');

            var currentTemp = document.getElementById('currentTemp');

            var summary = document.getElementById('summary');

            var precipitation = document.getElementById('precipitation');

            var windSpeed= document.getElementById('windSpeed');

            cityDisplay.innerHTML = city + ', ' + state;
            currentTemp.innerHTML = temp + '&deg; F';
            summary.innerHTML = weather;
            precipitation.innerHTML = 'Precipitation: ' + precipToday + ' inches';
            windSpeed.innerHTML = 'Wind Speed: ' + windmph + ' mph';

            document.getElementById("cover").classList.add('fadeout');

        });


    }

    function fetchData(grab) {
        var url = "/blainard91.github.io/Weather/Javascript/weather.json";
        getJSON(url).then(function (data) {
            console.log(data);
            var city = data[grab]["City"];
            var state = data[grab]["State"];
            var high = data[grab]["High"];

            var location = document.getElementById('location');
            var temp = document.getElementById('temp');

            location.innerHTML = city + ', ' + state;
            temp.innerHTML = high;

        });

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    }
}());
