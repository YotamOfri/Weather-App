async function GetWeather(url, city) {
  // Getting The Data From Api
  url = url.replace("city", city);
  const response = await fetch(url);
  const data = await response.json();
  // Creating the Template
  var template = document.getElementById("card-template").content;
  var template_content = document.importNode(template, true);
  // Getting Day From Date
  let my_date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Customizing the Template
  const card_container = template_content.querySelector(".card-container");
  const card = template_content.querySelector(".card");
  const city_text = template_content.querySelector("#city");
  const country_text = template_content.querySelector("#country");
  const info_text = template_content.querySelector("#text");
  const time_text = template_content.querySelector("#time");
  const feel_text = template_content.querySelector("#feel");
  const degrees = template_content.querySelector("#degrees");
  const humitidiy = template_content.querySelector("#humitidiy");
  const cloud = template_content.querySelector("#cloud");
  const wind = template_content.querySelector("#wind");
  function TempC() {
    feel_text.innerText = `Feels Like ${data.current.feelslike_c}°`;
    degrees.innerText = `${data.current.temp_c}°`;
  }

  function TempF() {
    feel_text.innerText = `Feels Like ${data.current.feelslike_f}°`;
    degrees.innerText = `${data.current.temp_f}°`;
  }
  TempC();
  humitidiy.innerText = `${data.current.humidity}%`;
  cloud.innerText = `${data.current.cloud}%`;
  wind.innerText = `${data.current.wind_kph}km/p`;
  city_text.innerText = data.location.name;
  country_text.innerText = data.location.country;
  info_text.innerText = data.current.condition.text;
  time_text.innerText = `${
    days[my_date.getDay()]
  } ${my_date.getHours()}:${my_date.getMinutes()}`;
  // background Chnage
  if (data.current.temp_c > 28) {
    card.style.backgroundImage = "url('/resources/hot.jpg')";
  } else if (data.current.temp_c > 23) {
    card.style.backgroundImage = "url('/resources/chill.jpg')";
  } else {
    card.style.backgroundImage = "url('/resources/cold.jpg')";
  }
  // Buttons Change
  const celsius_btn = template_content.querySelector(".celsius");
  const fahrenheit_btn = template_content.querySelector(".fahrenheit");
  const button_container = template_content
    .querySelector(".btns-container")
    .querySelectorAll("button");
  button_container.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      if (!event.target.classList.contains("btn-active")) {
        btn.classList.add("btn-active");
        if (event.target.classList.contains("celsius")) {
          fahrenheit_btn.classList.remove("btn-active");
          TempC();
        } else {
          celsius_btn.classList.remove("btn-active");
          TempF();
        }
      }
    });
  });
  // removing when pressing other then the card

  card_container.addEventListener("click", (event) => {
    if (event.target.classList.contains("card-container")) {
      while (card_container.firstElementChild) {
        card_container.firstElementChild.remove();
      }
      card_container.remove();
    }
  });
  document.body.append(template_content);
}

export default GetWeather;
