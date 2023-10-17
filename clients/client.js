let map;

function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
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
        new google.maps.Marker({
          position: {
            lat: Number(results[i].latitude),
            lng: Number(results[i].longtitude),
          },
          map: map,
          title: results[i].name,
        });
      }
    });
}

window.initMap = initMap;
