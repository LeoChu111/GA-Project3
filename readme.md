# 🌟 Servo App: Your Petrol Station Locator 🌟

This Servo App is developed as a joint effort by a team of five as part of GA's Software Engineering Immersive program. The primary goal was to create an intuitive and efficient Single Page Application (SPA) tailored for individuals seeking to locate petrol stations based on their geographical coordinates.

📢 Tools used: HTML, CSS, JavaScript, Node.js, Express, Postgres, Google Map API, Futures API

💎 Light Mode
![](/clients/images/Light-mode-2.png)

💎 Dark Mode
![](/clients/images/Dark-mode-2.png)

## 🏆 Meet the Team

- Leo: https://github.com/LeoChu111
- Jemma: https://github.com/jemmaclark
- Tom: https://github.com/tomsoust
- Vivian: https://github.com/viviantaoyh
- Taymen: https://github.com/taymen30

## 🎯 User Guide

The Servo App API is designed to offer users an effortless experience in locating nearby petrol stations based on their geographical location. For developers or administrators looking to integrate or set up the application, the below guide provides a step-by-step walkthrough to get you up and running.

### 1. Acquire Necessary API Keys

The Servo App leverages various APIs to ensure optimal functionality. To make the most of its features, it's essential to secure and input the required API keys.

#### [Google Map API](https://developers.google.com/maps)

Input your Google Map API key into the dedicated script tag found in the index.html within the clients directory.

```
<script async
 src="https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY&callback=initMap"
></script>

```

#### [Futures API](https://www.futures-api.com/documentation)

Input your Futures API key into latest_prices.js, situated inside the components folder within the clients directory.

```
const apiKey = "YOUR-FUTURES-API-KEY";
```

### 2. Database Setup

We've chosen PostgreSQL as our database solution for its reliability and scalability. Follow the below steps for database setup:

- **Database Creation** - Create a new PostgreSQL database named servo_app.
- **Table Setup** - Construct a table named stations. You can reference the schema (data.sql) provided in the db directory to ensure correct fields and data types.
- **Data Seeding** - Populate the stations table using the stations.csv file. This can be achieved with the following command:

```
\copy stations FROM '/db/stations.csv' DELIMITER ',' CSV HEADER;
```

### 3. Launch & Explore

With the server up and running, navigate to the application's main page. Delve into its features, from station spotlights to real-time pricing updates, and enjoy a seamless petrol station locator experience.

## 🌈 Key Features Overview

1. **Spotlight**

   - Showcase a random petrol station.
   - 'Refresh' to view another station.
   - Select its name to pinpoint its location on the map.

2. **Statistical Overview**

   - Presents metrics on the top seven corporations with the highest number of stations.

3. **Real-time Fuel Pricing**

   - Access current prices for WTI Oil, Brent Oil (USD/barrel) and Natural Gas (USD/MMBtu).
   - Data Source: Futures API.

4. **Team Introduction**

   - Meet the minds behind Servo App!

5. **Dynamic Date & Time**

   - Displays local time based on user's geolocation.

6. **Map Positioning & Search**

   - Show current map centre latitude and longitude.

7. **Nearest Station Locator**

   - Highlights the top 10 closest petrol stations from the map's center.

8. **Hotkeys**

   - Use Ctrl + Shift + B to swiftly toggle sidebars on/off.

9. **Interactive Markers**

   - Click on a marker to see station info.

10. **Data Visualization**

    - Deploys IP-based geolocation for an accurate map overlay of nearby petrol stations.
    - Differentiates major brands like Caltex, BP, Shell, 7 Eleven, and Independent Fuel Supplies with unique icons. Generic markers represent other stations.

11. **User-friendly Themes**
    - Enjoy a seamless transition between the app's visual presentations with the Light/Dark Mode toggle. The switch, located at the top right corner, provides visual comfort tailored to your preference.

## ♨️ Development Process

In a team of five, each of us brought unique skills to the table, setting the stage for some solid teamwork. The tight four-day deadline made things intense, but with a great team spirit, we turned challenges into fun learning moments.

### Tools & Workflow

- **GitHub:** Our mainstay for version control. It helped us manage our code, merge seamlessly, and stay on the same page.
- **Trello:** Our roadmap. Everything from tasks to progress was tracked here, keeping us organized and on-target.

  [Check out our Trello Board here](https://trello.com/b/6SZitQzm/server)

### Development Approach

- **Zoom Pair Programming:** For the tricky bits, we teamed up on Zoom. Two/Three heads often proved better than one!
- **Divide and Conquer:** We played to our strengths, divvying up tasks to speed things along.
