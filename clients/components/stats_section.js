const totalOwners = document.querySelector(".owners");
const totalStations = document.querySelector(".stations");

fetchOwners().then((res) => (totalOwners.innerHTML = res));
fetchStats()
    .then(res => {
        totalStations.innerHTML = res.totalStations
        totalOwners.innerHTML = res.totalOwners
        for(i = 0; i < 7; i++) {
            let list = document.createElement('li')
            let span = document.createElement('span')
            list.innerText = res.owners[i].owner
            span.innerText = Number(res.owners[i].total)
            let statsParent = document.querySelector('.stats-list')
            statsParent.appendChild(list)
            statsParent.appendChild(span)
        }
    })

