fetchStations()
    .then(res => {
        for(i = 0; i <= 10; i++) {
            const HTML = `
	        <p>${res[i].name}<strong></strong></br>${res[i].address}</p>
            `
        let stationDiv = document.createElement('div')
        stationDiv.innerHTML = HTML;

        const nearest = document.querySelector('.nearest')
        nearest.appendChild(stationDiv);
        }
    })

