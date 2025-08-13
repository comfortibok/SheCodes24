function updateTime() {
  // Lagos
  let lagosElement = document.querySelector("#lagos");
  if (lagosElement) {
    let lagosDate = lagosElement.querySelector("span");
    let lagosTime = lagosElement.querySelector("h2");
    let lagos = moment().tz("Africa/Lagos");
    lagosDate.innerHTML = lagos.format("MMMM Do YYYY");
    lagosTime.innerHTML = lagos.format("h:mm:ss [<small>]A[</small>]");
  }

  // Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDate = amsterdamElement.querySelector("span");
    let amsterdamTime = amsterdamElement.querySelector("h2");
    let amsterdam = moment().tz("Europe/Amsterdam");
    amsterdamDate.innerHTML = amsterdam.format("MMMM Do YYYY");
    amsterdamTime.innerHTML = amsterdam.format("h:mm:ss [<small>]A[</small>]");
  }

  // Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDate = melbourneElement.querySelector("span");
    let melbourneTime = melbourneElement.querySelector("h2");
    let melbourne = moment().tz("Australia/Melbourne");
    melbourneDate.innerHTML = melbourne.format("MMMM Do YYYY");
    melbourneTime.innerHTML = melbourne.format("h:mm:ss [<small>]A[</small>]");
  }
}
updateTime();
setInterval(updateTime, 1000);
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h3>${cityName}</h3>
            <span>${cityTime.format("MMMM Do YYYY")}</span>
          </div>
          <h2>${cityTime.format("h:mm:ss")}<small> ${cityTime.format(
    "A"
  )}</small></h2>
        </div> <a href="./index.html">Homepage</a>`;
}
let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
