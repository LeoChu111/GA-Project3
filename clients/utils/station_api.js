
function fetchOwners() {
    return fetch('/api/owners')
        .then(res => res.json())
        .then(res => {return res.length})
}

