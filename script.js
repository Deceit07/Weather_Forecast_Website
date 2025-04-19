const options = {
    method: "GET",
  };
  
  const getweather = (city) => {
    cityName.innerHTML = city;
  
    // Build the URL dynamically using the city name
    const apiKey = 'c47cbe8a197594baa6a043b98e148c48'; // Your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
        // Check if the elements exist
        if (humidity) humidity.innerHTML = data.main.humidity;
        if (sunrise) sunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        if (sunset) sunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        if (temp) temp.innerHTML = data.main.temp;
        if (temp_max) temp_max.innerHTML = data.main.temp_max;
        if (temp_min) temp_min.innerHTML = data.main.temp_min;
        if (description) description.innerHTML = data.weather[0].description;
        if (deg) deg.innerHTML = data.wind.deg;
        if (gust) gust.innerHTML = data.wind.gust;
        if (speed) speed.innerHTML = data.wind.speed;
        if (pressure) pressure.innerHTML = data.main.pressure;
        if (feels_like) feels_like.innerHTML = data.main.feels_like;
      })
      .catch((err) => console.error(err));
  };
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value); // Pass the city value from input
  });
   getweather("Delhi")