function updateTime() {
  let date = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
  });

  const clockDiv = document.querySelector(".clock");
  const clock = document.createElement("h2");
  clock.innerHTML = date;
  clockDiv.innerHTML = "";
  clockDiv.appendChild(clock);
}

setInterval(updateTime, 1000);
