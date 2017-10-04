function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    })
}

(function init() {
    var franklin = document.getElementById('franklinlink');
    var greenville = document.getElementById('greenvillelink');
    var springfield = document.getElementById('springfieldlink');
    franklin.addEventListener('click', function(event) {
        event.preventDefault();
        fetchData('Franklin');
    });
    greenville.addEventListener('click', function(event) {
        event.preventDefault();
        fetchData('Greenville');
    });
    springfield.addEventListener('click', function(event) {
        event.preventDefault();
        fetchData('Springfield');
    });
}) ();

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

    };

fetchData();
