const randomAddress = document.querySelector("#random-address");
const randomName = document.querySelector("#random-name");
const refreshLink = document.querySelector("#refresh-link");

fetchRandomStation().then((res) => {
  randomName.innerText = res.name;
  randomAddress.innerText = res.address;
});

function handleRefresh(event) {
  event.preventDefault();
  fetchRandomStation().then((res) => {
    randomName.innerText = res.name;
    randomAddress.innerText = res.address;
  });
}

refreshLink.addEventListener("click", handleRefresh);
