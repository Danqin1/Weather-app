window.onload = function () {
    //console.log("loaded")
    const form = document.getElementById('form');
    form.addEventListener('submit', load);
    var city = document.getElementById("city");
    var d = new Date();

    const secondDay = document.querySelector('#secondDay')
    secondDay.innerHTML = d.getDate()+2+"."+(d.getMonth()+1)
    const thirdDay = document.querySelector('#thirdDay')
    thirdDay.innerHTML = d.getDate()+3+"."+(d.getMonth()+1)

    function load (e) {
        e.preventDefault();
        let temp = document.getElementById("temp");
        let main = document.getElementById('main')
        let data

        const xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.open('POST', 'http://api.openweathermap.org/data/2.5/weather?q=' + city.value +
            '&appid=0a6b59f9dfbf75051d17766f20204ab0&units=metric');
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                data = this.response
                //console.log(typeof (this.response))
                
                temp.innerHTML = "Temperature: " + data.main.temp + " °C"
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
            }
        }
        xhttp.send();
        getForecast();
    }

    function getForecast(){
        let main1 = document.getElementById('main1');
        let temp1 = document.getElementById('temp1');
        let main2 = document.getElementById('main2');
        let temp2 = document.getElementById('temp2');
        let main3 = document.getElementById('main3');
        let temp3 = document.getElementById('temp3');


        const xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.open('POST', 'http://api.openweathermap.org/data/2.5/forecast?q='+city.value+'&appid=0a6b59f9dfbf75051d17766f20204ab0&units=metric',true);

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = this.response
                console.log(data.list[0].weather[0].main)
                console.log(data.list[8].dt_txt)
                console.log(data.list[16].dt_txt)
                console.log(data.list[24].dt_txt)

                main1.innerText = "Weather: " + data.list[8].weather[0].main;
                main2.innerText = "Weather: " + data.list[16].weather[0].main;
                main3.innerText = "Weather: " + data.list[24].weather[0].main;

                temp1.innerText = "Temperature: " + Math.round(data.list[8].main.temp) + " °C";
                temp2.innerText = "Temperature: " + Math.round(data.list[16].main.temp) + " °C";
                temp3.innerText = "Temperature: " + Math.round(data.list[24].main.temp) + " °C";
            }
        
        }
        xhttp.send()
    }
}