window.onload = function () {
    //console.log("loaded")
    let form = document.getElementById('form');
    form.addEventListener('submit', load);

    function load(e) {
        e.preventDefault();
        let temp = document.getElementById("temp");
        let city = document.getElementById("city");
        let name = document.getElementById('name')
        let main = document.getElementById('main')
        var data
        ///console.log(city.value)
        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.open('POST', 'http://api.openweathermap.org/data/2.5/weather?q=' + city.value +
            '&appid=0a6b59f9dfbf75051d17766f20204ab0&units=metric');
        xhttp.onreadystatechange = function () {
            if (this.readyState = 4 && this.status == 200) {

                data = this.response
                //console.log(typeof (this.response))
                name.innerHTML = "Entered city: " + data.name
                temp.innerHTML = "Temperature: " + data.main.temp + " Celcius"
                main.innerHTML = "Weather: " + data.weather[0].main
                if (data.weather[0].main == "Clouds") {
                    //console.log("cloud");
                    document.body.style.background = "url('img/clouds.jpg')"
                } else if (data.weather[0].main == "Thunderstorm") {

                    document.body.style.background = "url('img/storm.jpg')"
                } else if (data.weather[0].main == "Rain") {

                    document.body.style.background = "url('img/rain.jpg')"
                } else {
                    document.body.style.background = "url('img/dawn.jpg')no-repeat"
                    document.body.style.backgroundSize = "cover"
                }
            } else {
                name.innerHTML = "Wrong input value"
                temp.innerHTML = ""
                main.innerHTML = ""
            }
        }
        xhttp.send();
    }


};