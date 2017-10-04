var parseQueryString = function(url) {
    var urlParams = {};
    url.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) {
            urlParams[$1] = $3;
        }
    );
    return urlParams;
}

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }


(function init() {
    var about = document.getElementById('about');
    var facilities = document.getElementById('facilities');
    var page = parseQueryString(window.location.href);
    console.log(page);

    if (page["page"]=="about"){
        fetchData('about');
    }

    else if (page["page"]=="facilities"){
        fetchData('facilities');
    }

    about.addEventListener('click', function(event) {
        event.preventDefault();
        fetchData('about');
    });
    facilities.addEventListener('click', function(event) {
        event.preventDefault();
        fetchData('facilities');
    });
}) ();


    function fetchData(grab) {
        var url = "/final_project/dropd.json";
        getJSON(url).then(function (data) {
            console.log(data);

            var title = data[grab]['title'];
            var paragraph = data[grab]['paragraph'];


            var pagetitle = document.getElementById('title');
            var pageparagraph = document.getElementById('paragraph');

            pagetitle.innerHTML = title;
            pageparagraph.innerHTML = paragraph;

        });

        };



