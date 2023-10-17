let map;

function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    //minZoom: 9,
    center: myLatLng,
  });

  fetch("/api/stations/all")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((results) => {
      for (i = 0; i < 400; i++) {
        const contentString =
        `<h3 id="firstHeading" class="firstHeading">${results[i].name}</h3>
         <p id="address">${results[i].address}</p>`;
        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          ariaLabel: results[i].name,
        });
        const marker = new google.maps.Marker({
          position: {
            lat: Number(results[i].latitude),
            lng: Number(results[i].longtitude),
          },
          map: map,
          title: results[i].name,
        });
        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
          });
        });
      }
    });
}

window.initMap = initMap;
