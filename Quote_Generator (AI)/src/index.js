function displayquote(response) {
  new Typewriter(".quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1.5,
  });
}
function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let apikey = "5of280a2b12980f017dcf8ff8fda334t";
  let prompt = `User instruction:Generate a quote on ${searchInput.value}`;
  let context =
    "You are an expert in writing quotes. Make sure to give a concise and clear quote. Do not include title. Sign the quote with the author in a <strong> element at the end NOT at the beginning.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  axios.get(apiURL).then(displayquote);
  let quote = document.querySelector(".quote");
  quote.classList.remove("hidden");
  quote.innerHTML = `<span class="generate-quote">⏳Generating quote on ${searchInput.value}</span>`;
searchInput.value = "";
}
let search = document.querySelector("#form");
search.addEventListener("submit", handleSearch);
