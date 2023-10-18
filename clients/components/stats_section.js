const totalOwners = document.querySelector(".owners");
const totalStations = document.querySelector(".stations");

fetchOwners().then((res) => (totalOwners.innerHTML = res));
fetchStats()
    .then(res => {
        totalStations.innerHTML = res.totalStations
        totalOwners.innerHTML = res.totalOwners
        for(i = 0; i < 7; i++) {
            let stats = document.createElement('div')
            stats.classList.add('stats-wrapper')
            let html = `
                <li>${res.owners[i].owner}</li>
                <span>${Number(res.owners[i].total)}</span>
            `
            stats.innerHTML = html
            let statsParent = document.querySelector('.stats-list')
            statsParent.appendChild(stats)
        }
    })

