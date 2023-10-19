function updateTime() {
  let date = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
  });

  let justDate = new Date().toLocaleDateString()

  const clockDiv = document.querySelector(".clock");
  const clock = document.createElement("h2");
  clock.innerHTML = `&#x1F55B; ${date}`;
  clockDiv.innerHTML = "";
  clockDiv.appendChild(clock);

  const latestDate = document.querySelector("#current-date")
  latestDate.innerHTML = justDate;
}

setInterval(updateTime, 1000);
