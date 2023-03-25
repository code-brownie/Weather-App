console.log("This is my weather App");

let temp = document.querySelector(".temp span");
let btn = document.getElementById('hero-btn');
let input = document.getElementById('input');
let City = document.querySelector(".city ");
let wind = document.querySelector(".wind span");
let humidity = document.querySelector(".humidity span");
let weatherCondition = document.querySelector('.weather-condition');
const apikey = 'd8d6f38738b614ddbc8822f18334138c';
function getdata(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        City.innerHTML = data.name;
        var Temp = data.main.temp;
        temp.innerHTML = Math.round(Temp);
        wind.innerHTML = data.wind.speed;
        humidity.innerHTML = data.main.humidity;
        weatherCondition.innerHTML = data.weather[0].main;
        const weatherIcon = document.querySelector(".weather-icon");
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'images/clouds.png'
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'images/clear.png'

        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'images/rain.png'

        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png'

        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png'

        }
        else if (data.weather[0].main == 'Haze') {
            weatherIcon.src = 'images/haze.png'

        }
    })

}
btn.addEventListener('click', () => {
    getdata(input.value);
})
// updating the image

// https://api.openweathermap.org/data/2.5/weather?units=metric&q=patna&appid=d8d6f38738b614ddbc8822f18334138c
