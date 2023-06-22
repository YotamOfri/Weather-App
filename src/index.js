import GetWeather from "./Getweather";

const url = `https://api.weatherapi.com/v1/current.json?key=8a933995f8504f2ab31151715231705&q=city&aqi=yes`;
const search_bar_container = document.querySelector(".search-bar-container");
const search_bar = document.querySelector("#search-bar");
search_bar_container.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (document.body.querySelector(".card-container") === null) {
      GetWeather(url, search_bar.value);
    }
  }
});
