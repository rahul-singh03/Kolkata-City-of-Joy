//type writer..............................
if (document.getElementById("typewriter")) {
  const lines = [
    "Kolkata, the City of Joy, is where old-world charm",
    "and daily chaos blend like chai and adda.",
    "From Howrah Bridge to Park Street’s lights,",
    "the city feels like home wrapped in stories and mishti.",
  ];

  const speed = 50; // typing speed per letter
  const lineDelay = 500; // delay between lines
  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        document.getElementById("typewriter").innerHTML +=
          currentLine.charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, speed);
      } else {
        document.getElementById("typewriter").innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, lineDelay);
      }
    }
  }

  typeLine();
}

//json college.......................................................................

if (document.getElementById("colleges")) {
  fetch("colleges.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("colleges");
      data.forEach((college) => {
        container.innerHTML += `
          <div class="college-card">
            <h3>${college.name}</h3>
            <p><strong>Location:</strong> ${college.location}</p>
            <p>${college.desc}</p>
            <a href="${college.website}" target="_blank">Visit Website</a>
          </div>
        `;
      });
    });
}

// Companies JSON .....................................................
if (document.getElementById("companies")) {
  fetch("companies.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("companies");
      data.forEach((company) => {
        container.innerHTML += `
          <div class="college-card">
            <h3>${company.name}</h3>
            <p><strong>Location:</strong> ${company.location}</p>
            <p>${company.desc}</p>
            <a href="${company.website}" target="_blank">Visit Website</a>
          </div>
        `;
      });
    });
}

// Railways JSON ..........................................................
if (document.getElementById("railways")) {
  fetch("railways.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("railways");
      data.forEach((station) => {
        container.innerHTML += `
          <div class="college-card">
            <h3>${station.name}</h3>
            <p><strong>Location:</strong> ${station.location}</p>
            <p>${station.desc}</p>
            <a href="${station.website}" target="_blank">View on Google Maps</a>
          </div>
        `;
      });
    });
}

// Tourist Places JSOn...............................................
if (document.getElementById("tourist-places")) {
  fetch("tourist_places.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("tourist-places");
      data.forEach((place) => {
        container.innerHTML += `
          <div class="college-card">
            <h3>${place.name}</h3>
            <p><strong>Location:</strong> ${place.location}</p>
            <p>${place.desc}</p>
            <a href="${place.website}" target="_blank">View on Google Maps</a>
          </div>
        `;
      });
    });
}

// hospitals JSON ..........................................................
if (document.getElementById("hospitals")) {
  fetch("hospitals.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("hospitals");
      data.forEach((place) => {
        container.innerHTML += `
          <div class="college-card">
            <h3>${place.name}</h3>
            <p><strong>Location:</strong> ${place.location}</p>
            <p>${place.desc}</p>
            <a href="${place.website}" target="_blank">View on Google Maps</a>
          </div>
        `;
      });
    });
}

const toggleBtn = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");

function setThemeIcon() {
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png";
  } else {
    themeIcon.src =
      "https://img.icons8.com/ios-filled/50/000000/crescent-moon.png";
  }
}

// On page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
setThemeIcon();

// On toggle click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  setThemeIcon();
});

// weather......................

const API_KEY = "86bfe8e384d7ce39c7b695a3f234e466";

const weatherIcon = document.getElementById("weather-icon");
const weatherTemp = document.getElementById("weather-temp");

if (weatherIcon && weatherTemp) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== 200) {
        weatherIcon.style.display = "none";
        weatherTemp.style.display = "none";
        return;
      }

      const temp = data.main.temp;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      weatherIcon.src = iconUrl;
      weatherTemp.textContent = `${temp}°C`;
      weatherIcon.style.display = "inline";
      weatherTemp.style.display = "inline";
    })
    .catch((err) => {
      console.error("Weather Error:", err);
      weatherIcon.style.display = "none";
      weatherTemp.style.display = "none";
    });
}
