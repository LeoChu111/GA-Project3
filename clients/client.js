let map, infoWindow;
const mapCenterLocationDiv = document.querySelector(".map-center-location");

function initMap() {
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const myLatLng = pos;
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: myLatLng,
        });
        infoWindow = new google.maps.InfoWindow();
        const locationButton = document.createElement("button");
        locationButton.textContent = "Pan to Current Location";
        locationButton.classList.add("custom-map-control-button");
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(
          locationButton
        );
        locationButton.addEventListener("click", () => {
          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent("Location found.");
                infoWindow.open(map);
                map.setCenter(pos);
              },
              () => {
                handleLocationError(true, infoWindow, map.getCenter());
              }
            );
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        });
        function getCenterLocation() {
          const center = map.getCenter();
          const lat = center.lat();
          const lng = center.lng();
          const centerLocationSection = document.createElement("section");
          centerLocationSection.innerHTML = `
            Latitude: ${lat}<br>Longitude: ${lng}`;
          mapCenterLocationDiv.innerHTML = "";
          mapCenterLocationDiv.appendChild(centerLocationSection);
        }
        google.maps.event.addListener(map, "dragend", getCenterLocation);
        fetch("/api/stations/all")
          .then((res) => res.json())
          .then((results) => {
            for (i = 0; i < 400; i++) {
              const contentString = `<h3 id="firstHeading" class="firstHeading">${results[i].name}</h3>
               <p id="address">${results[i].address}</p>`;
              const infowindow = new google.maps.InfoWindow({
                content: contentString,
                ariaLabel: results[i].name,
              });
              const marker = new google.maps.Marker({
                position: {
                  lat: Number(results[i].latitude),
                  lng: Number(results[i].longitude),
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
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

window.initMap = initMap;

