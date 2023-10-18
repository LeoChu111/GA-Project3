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

          // fetch needed lat and lng from the map.getCenter() function so had to be nested somewhere in initMap()
          fetchClosestTen(lat, lng).then((stations) => {
            const container = document.getElementById("station-container");
            const nearest = document.querySelector(".nearest");

            // reset the content of the 'nearest' section
            nearest.innerHTML = "";
            //for of loop for better readability
            for (let station of stations) {
              const HTML = `
              <p>${station.name} <strong>${
                station.distance * (110.574 * 110.574) * 1000
              }M</strong></br>${station.address}</p>
              `;
              // create the element
              let stationDiv = document.createElement("div");
              stationDiv.innerHTML = HTML;
              stationDiv.className = "nearest-stations";

              nearest.appendChild(stationDiv);
            }
          });
        }
        // have to call the function so it loads with the initMap
        getCenterLocation();

        google.maps.event.addListener(map, "dragend", getCenterLocation);

        // why didnt we use the function that we made in stations_api.js "fetchStations()"

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
              const image = {
                Shell: {
                  name: "Shell",
                  url: "/images/shell.png",
                  scaledSize: new google.maps.Size(30, 30),
                },
                BP: {
                  name: "BP",
                  url: "/images/BP-logo.png",
                  scaledSize: new google.maps.Size(30, 30),
                },
                "7-Eleven Pty Ltd": {
                  name: "7-Eleven Pty Ltd",
                  url: "/images/7eleven.png",
                  scaledSize: new google.maps.Size(30, 30),
                },
                "Independent Fuel Supplies": {
                  name: "Independent Fuel Supplies",
                  url: "/images/inde.png",
                  scaledSize: new google.maps.Size(30, 30),
                },
                Caltex: {
                  name: "Caltex",
                  url: "/images/caltex.png",
                  scaledSize: new google.maps.Size(30, 30),
                },
                GoogleMark: {
                  name: "GoogleMark",
                  url: "/images/googlemapmarker.png",
                  scaledSize: new google.maps.Size(30, 30),
                },
              };
              if (image.hasOwnProperty(results[i].owner)) {
                const marker = new google.maps.Marker({
                  position: {
                    lat: Number(results[i].latitude),
                    lng: Number(results[i].longitude),
                  },
                  map: map,
                  icon: image[results[i].owner],
                  title: results[i].name,
                });
                marker.addListener("click", () => {
                  infowindow.open({
                    anchor: marker,
                    map,
                  });
                });
              } else {
                const marker = new google.maps.Marker({
                  position: {
                    lat: Number(results[i].latitude),
                    lng: Number(results[i].longitude),
                  },
                  map: map,
                  icon: {
                    name: "GoogleMark",
                    url: "/images/googlemapmarker.png",
                    scaledSize: new google.maps.Size(30, 30),
                  },
                  title: results[i].name,
                });
                marker.addListener("click", () => {
                  infowindow.open({
                    anchor: marker,
                    map,
                  });
                });
              }
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
