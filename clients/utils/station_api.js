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


function fetchRandomStation() {
    return fetch("/api/stations/random")
        .then((res) => res.json())
}
function fetchStats() {
  return fetch("/api/stats")
        .then(res => res.json())
}