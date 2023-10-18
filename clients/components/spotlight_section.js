const randomAddress = document.querySelector("#random-address");
const randomName = document.querySelector("#random-name");
const refreshLink = document.querySelector("#refresh-link");

fetchRandomStation().then((res) => {
  randomName.innerText = res.name;
  randomAddress.innerText = res.address;

  let randomLat = Number(res.latitude);
  let randomLong = Number(res.longitude);

  randomName.addEventListener("click", handleRandomName);

  function handleRandomName(event) {
    event.preventDefault();
    
    let randomLocation = { lat: randomLat, lng: randomLong };

    map.setCenter(randomLocation);

  }

});

function handleRefresh(event) {
  event.preventDefault();
  fetchRandomStation().then((res) => {
    randomName.innerText = res.name;
    randomAddress.innerText = res.address;

    let randomLat = Number(res.latitude);
    let randomLong = Number(res.longitude);

    randomName.addEventListener("click", handleRandomName);

    function handleRandomName(event) {
      event.preventDefault();
      
      let randomLocation = { lat: randomLat, lng: randomLong };
  
      map.setCenter(randomLocation);
  
    }

  });
}


refreshLink.addEventListener("click", handleRefresh);
