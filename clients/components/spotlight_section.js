const randomAddress = document.querySelector("#random-address");
const randomName = document.querySelector("#random-name");
const refreshLink = document.querySelector("#refresh-link");

fetchRandomStation().then((res) => {
  randomName.innerText = res.name;
  randomAddress.innerText = res.address;
  
  let randomLat = Number(res.latitude);
  let randomLong = Number(res.longitude);

  const image = {
    Shell:"/images/shell.png",
    BP: "/images/BP-logo.png",
    "7-Eleven Pty Ltd": "/images/7eleven.png", 
    "Independent Fuel Supplies": "/images/inde.png", 
    Caltex: "/images/caltex.png",
    GoogleMark: "/images/googlemapmarker.png"
  }
  let logo = document.querySelector('#spotlight-logo')
  if (image.hasOwnProperty(res.owner)) {
    logo.src = `${image[res.owner]}`
  } else {
    logo.src = `${image.GoogleMark}`
  }
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

    const image = {
      Shell:"/images/shell.png",
      BP: "/images/BP-logo.png",
      "7-Eleven Pty Ltd": "/images/7eleven.png", 
      "Independent Fuel Supplies": "/images/inde.png", 
      Caltex: "/images/caltex.png",
      GoogleMark: "/images/googlemapmarker.png"
    }
    let logo = document.querySelector('#spotlight-logo')
    if (image.hasOwnProperty(res.owner)) {
      logo.src = `${image[res.owner]}`
    } else {
      logo.src = `${image.GoogleMark}`
    }

    randomName.addEventListener("click", handleRandomName);

    function handleRandomName(event) {
      event.preventDefault();
      
      let randomLocation = { lat: randomLat, lng: randomLong };
  
      map.setCenter(randomLocation);
  
    }

  });
}


refreshLink.addEventListener("click", handleRefresh);
