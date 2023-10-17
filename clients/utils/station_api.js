function fetchOwners() {
  return fetch("/api/owners")
    .then((res) => res.json())
    .then((res) => {
      return res.length;
    });
}

function fetchStations() {
  return fetch("/api/stations/all")
    .then((res) => res.json())
}
