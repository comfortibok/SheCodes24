function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1.5,
  });
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let apikey = "5of280a2b12980f017dcf8ff8fda334t";
  let prompt = `User instructions: Generate a french poem about ${searchInput.value}`;
  let context =
    "You are an expert in writing poems. Generate a clear and short poem of 4 lines separating each line with <br/>. Do not include title. Sign the poem with 'Comfort Ibok' inside a strong element at the end NOT at the beginning";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  let poem = document.querySelector("#poem");
  poem.classList.remove("hidden");
  poem.innerHTML = `<div class="generating">⏳ Generating a French Poem about ${searchInput.value}.</div>`;
  axios.get(apiURL).then(displayPoem);
  searchInput.value = ""
}

let poemElement = document.querySelector("form");
poemElement.addEventListener("submit", handleSubmit);
