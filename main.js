let button      = document.querySelector("#buttonBuscar");
let maxima      = document.querySelector("#maxima");
let minima      = document.querySelector("#minima");
let humedad     = document.querySelector("#humedad");
let termica     = document.querySelector("#termica");
let atmosferica = document.querySelector("#atmosferica");
let velocidad   = document.querySelector("#velocidad");
let inputValor  = document.querySelector("#inputValor");
let imagen      = document.querySelector("#img");

button.addEventListener('click', e =>{

    let cityName = inputValor.value;
    if(cityName){
           fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2946a025d0e5b634e1ce6c856bb7ac08&lang=sp`)
            .then( response => { return response.json()})
            .then( data => {
                let tempMax = Math.round(data.main.temp_max - 273.15);
                let tempMin = Math.round(data.main.temp_min - 273.15);
                let humidity = Math.round(data.main.humidity);
                let sensacionT = Math.round(data.main.feels_like - 273.15);
                let presion = Math.round(data.main.pressure);
                let speed = Math.round(data.wind.speed * 3.6);
                let weather = data.weather[0].main;
                maxima.innerHTML = `${tempMax} ºC`;
                minima.innerHTML = `${tempMin} ºC`;
                humedad.innerHTML = `${humidity} %`;
                termica.innerHTML = `${sensacionT} ºC`;
                atmosferica.innerHTML = `${presion} hPa`;
                velocidad.innerHTML = `${speed} km/h`

                if(weather == "Clear"){
                    imagen.src = "img/sol.png";
                    imagen.alt = "soleado";
                }else if(weather == "Snow"){
                    imagen.src = "img/nieve.png";
                    imagen.alt = "nevado";
                }else if(weather == "Rain"){
                    imagen.src = "img/lluvia.png";
                    imagen.alt = "lluvioso";
                }else if(weather == "Clouds"){
                    imagen.src = "img/nube.png";
                    imagen.alt = "nublado";
                }else if(weather == "Mist"){
                    imagen.src = "img/neblina.png";
                    imagen.alt = "neblina";
                }
            })
            .catch( error => {

            }) 
    }

})
