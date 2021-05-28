import weather from "./modules/weather";
import view from "./modules/view";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
});

searchBtn.addEventListener("click", async () => {
    if(searchInput.value === "") return;
    const weatherData = await weather.getData(searchInput.value);
    view.updateView(weatherData);
});

document.addEventListener("DOMContentLoaded", async () => {
    const weatherData = await weather.getData("chandler");
    view.updateView(weatherData);
})