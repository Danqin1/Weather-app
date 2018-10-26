window.onload = function () {
    //console.log("loaded")
    const form = document.getElementById('form');
    form.addEventListener('submit', load);
    const city = document.getElementById("city");
    var d = new Date();
    const tommorow = document.querySelector('#tommorow')
    tommorow.innerHTML = d.getDate()+1+"."+(d.getMonth()+1)
    const secondDay = document.querySelector('#secondDay')
    secondDay.innerHTML = d.getDate()+2+"."+(d.getMonth()+1)
    const thirdDay = document.querySelector('#thirdDay')
    thirdDay.innerHTML = d.getDate()+3+"."+(d.getMonth()+1)


    function load(e) {
        e.preventDefault();
        let temp = document.getElementById("temp");
        let main = document.getElementById('main')
        let data

        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.open('POST', 'http://api.openweathermap.org/data/2.5/weather?q=' + city.value +
            '&appid=0a6b59f9dfbf75051d17766f20204ab0&units=metric');
        xhttp.onreadystatechange = function () {
            if (this.readyState = 4 && this.status == 200) {

                data = this.response
                //console.log(typeof (this.response))
                
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
        getForecast();
    }

    function getForecast(){
        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.open('POST', 'http://api.openweathermap.org/data/2.5/forecast?q='+city.value+'&mode=xml&appid=0a6b59f9dfbf75051d17766f20204ab0');

        xhttp.onreadystatechange = function () {
            if (this.readyState = 4 && this.status == 200) {
                let data = this.response
                console.log(data)
                console.log('wys')
            }
        
        }
        xhttp.send()
    }
}