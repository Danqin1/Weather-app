window.onload = function () {
    //console.log("loaded")
    let form = document.getElementById('form');
    form.addEventListener('submit', load);

    function load(e) {
        e.preventDefault();
        let data;
        document.getElementById('hours').style.display = "block";
        document.getElementById('days').style.display = "block";
        const xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.open('POST', 'http://api.openweathermap.org/data/2.5/forecast?q=' + city.value +
            '&appid=0a6b59f9dfbf75051d17766f20204ab0&units=metric', true);
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {

                data = this.response;
                
                setValuesHours(data);
                setValuesDays(data);
            } else {
                main1.innerHTML = "Wrong input value";
            }
        }
        xhttp.onerror = function (e) {
            console.error(xhttp.statusHTML);
        };
        xhttp.send();
    }

    function setValuesHours(data) {
        let temp1 = document.getElementById("temp1");
        let time1 = document.getElementById('time1');
        let main1 = document.getElementById('main1');
        let pressure1 = document.getElementById('pressure1');
        let humidity1 = document.getElementById('humidity1');

        let temp2 = document.getElementById("temp2");
        let time2 = document.getElementById('time2');
        let main2 = document.getElementById('main2');
        let pressure2 = document.getElementById('pressure2');
        let humidity2 = document.getElementById('humidity2');

        let temp3 = document.getElementById("temp3");
        let time3 = document.getElementById('time3');
        let main3 = document.getElementById('main3');
        let pressure3 = document.getElementById('pressure3');
        let humidity3 = document.getElementById('humidity3');

        let temp4 = document.getElementById("temp4");
        let time4 = document.getElementById('time4');
        let main4 = document.getElementById('main4');
        let pressure4 = document.getElementById('pressure4');
        let humidity4 = document.getElementById('humidity4');

        time1.innerHTML = data.list[0].dt_txt;
        main1.innerHTML = data.list[0].weather[0].main;
        temp1.innerHTML = data.list[0].main.temp + "&#8451;";
        pressure1.innerHTML = data.list[0].main.pressure + " hPa";
        humidity1.innerHTML = data.list[0].main.humidity + " %";

        time2.innerHTML = data.list[1].dt_txt;
        main2.innerHTML = data.list[1].weather[0].main;
        temp2.innerHTML = data.list[1].main.temp + "&#8451;";
        pressure2.innerHTML = data.list[1].main.pressure + " hPa";
        humidity2.innerHTML = data.list[1].main.humidity + " %";

        time3.innerHTML = data.list[2].dt_txt;
        main3.innerHTML = data.list[2].weather[0].main;
        temp3.innerHTML = data.list[2].main.temp + "&#8451;";
        pressure3.innerHTML = data.list[2].main.pressure + " hPa";
        humidity3.innerHTML = data.list[2].main.humidity + " %";

        time4.innerHTML = data.list[3].dt_txt;
        main4.innerHTML = data.list[3].weather[0].main;
        temp4.innerHTML = data.list[3].main.temp + "&#8451;";
        pressure4.innerHTML = data.list[3].main.pressure + " hPa";
        humidity4.innerHTML = data.list[3].main.humidity + " %";
    }
    function setValuesDays(data){
        let mainD1 = document.getElementById('mainD1');
        let tempD1 = document.getElementById('tempD1');
        let imgD1 = document.getElementById('imgD1');

        let mainD2 = document.getElementById('mainD2');
        let tempD2 = document.getElementById('tempD2');
        let imgD2 = document.getElementById('imgD2');

        let mainD3 = document.getElementById('mainD3');
        let tempD3 = document.getElementById('tempD3');
        let imgD3 = document.getElementById('imgD3');

        let mainD4 = document.getElementById('mainD4');
        let tempD4 = document.getElementById('tempD4');
        let imgD4 = document.getElementById('imgD4');

        let mainD5 = document.getElementById('mainD5');
        let tempD5 = document.getElementById('tempD5');
        let imgD5 = document.getElementById('imgD5');

        imgD1.innerHTML = setImg(data.list[0].weather[0].main);
        mainD1.innerHTML = data.list[0].weather[0].main;
        tempD1.innerHTML = data.list[0].main.temp + "&#8451;";

        imgD2.innerHTML = setImg(data.list[8].weather[0].main);
        mainD2.innerHTML = data.list[8].weather[0].main;
        tempD2.innerHTML = data.list[8].main.temp + "&#8451;";

        imgD3.innerHTML = setImg(data.list[16].weather[0].main);
        mainD3.innerHTML = data.list[16].weather[0].main;
        tempD3.innerHTML = data.list[16].main.temp + "&#8451;";

        imgD4.innerHTML = setImg(data.list[24].weather[0].main);
        mainD4.innerHTML = data.list[24].weather[0].main;
        tempD4.innerHTML = data.list[24].main.temp + "&#8451;";

        imgD5.innerHTML = setImg(data.list[32].weather[0].main);
        mainD5.innerHTML = data.list[32].weather[0].main;
        tempD5.innerHTML = data.list[32].main.temp + "&#8451;";
    }
    function setImg(data){
        if(data == "Clear" )
        {
            return '<i class="fas fa-sun"></i>';
        }
        else if(data == "Clouds"){
            return '<i class="fas fa-cloud"></i>';
        }
        else if(data == "Snow"){
            return '<i class="fas fa-snowflake"></i>';
        }
        else if(data == "Rain"){
            return '<i class="fas fa-cloud-rain"></i>';
        }
        else if(data == "Storm"){
            return '<i class="fas fa-bolt"></i>';
        }
        else if(data == "Fog"){
            return '<i class="fas fa-smog"></i>';
        }
        else {
            return '<i class="far fa-sun"></i>';
        }
    }

};