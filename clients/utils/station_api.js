function fetchOwners() {
  return fetch("/api/owners")
    .then((res) => res.json())
    .then((res) => {
      return res.length;
    });
}

function fetchStations() {
  return fetch("/api/stations/all").then((res) => res.json());
}

function fetchRandomStation() {
  return fetch("/api/stations/random").then((res) => res.json());
}

function fetchStats() {
  return fetch("/api/stats").then((res) => res.json());
}

function fetchClosestTen(lat, lng) {
  const url = "/api/stations/nearest?lat=" + lat + "&lng=" + lng;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
