const uri = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const API = "74fb6a7a2cc4d28449bb1b98f7986f48"
const cityName = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weath")


async function checkWeather(city) {
    const response = await fetch(uri + city + `&appid=${API}`);
    var data = await response.json();
    //extract JSON data from the http response
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    if (data.weather[0].main == "Clouds") {
        weathericon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "drizzle.png";
    }

    document.querySelector(".weather").style.display="block";

}


searchbtn.addEventListener("click", function(event) {

    checkWeather(cityName.value);
});

cityName.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
    checkWeather(cityName.value);
}
});


// function displayWeather(weatherData){
//   // console.log(weatherData);

//   let main = document.querySelector(".main");
//   let cityName = document.createElement("h1");
//   cityName.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
//   main.appendChild(cityName);

//   let weather = document.createElement("div");
//   let temp = document.createElement("p");
//   temp.textContent = `Temperature: ${weatherData.main.temp}°C`;
//   let feelsLike = document.createElement("p");
//   feelsLike.textContent = `Feels Like: ${weatherData.main.feels_like}°C`
//   let humidity = document.createElement("p");
//   humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;

//   weather.appendChild(temp);
//   weather.appendChild(document.createTextNode("\u00A0"));//inserts a non-breaking space
//   weather.appendChild(feelsLike);
//   weather.appendChild(document.createElement("br"));
//   weather.appendChild(humidity);

//   main.appendChild(weather);
// }

// let form = document.getElementById('form');
// form.addEventListener('click', (e)=>{
//   e.preventDefault();
//   let input = document.getElementById('search').value;
//   if(!input) alert("Please enter a location!");
//   else{
//     uri = `https://api.openweathermap.org/data/2.5/weather?q=`+encodeURIComponent(input)+`&units=metric`;
//     // console.log(uri);
//     try{
//       let data = checkWeather();
//       displayWeather(data);
//     }catch(error){console.log(error)}
//   }
// });




document.querySelector("button").addEventListener("click", () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;

});


document.querySelector("input").addEventListener("keyup", () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;

});




