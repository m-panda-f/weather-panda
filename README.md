# 🐼 **Pandas-Weather**
### _Forecasts with a side of silliness_

A lightweight, single-page weather application that fetches live weather data based on user input — wrapped in a fun, panda-themed UI.

---

## 🚀 Features
- **Live Weather Forecasts** – Fetches up-to-date weather in real time.  
- **Global Search** – Check weather for any city worldwide.  
- **Silly Mode** – Adds playful UI elements featuring a panda 🐼.  
- **Fully Responsive** – Works on desktop, tablet, and mobile.

---

## 📸 Demo 
```bash
https://pandas-weather.onrender.com/
```
<img width="3838" height="910" alt="imgonline-com-ua-twotoone-ysbHUa42fe1IO23" src="https://github.com/user-attachments/assets/d7a5f104-99ee-45ed-ad41-7a7268f4251b" />


---

## 🛠️ Tech Stack
- React.js 
- Bootstrap  
- Weather API (OpenWeatherMap or similar)

---

## 📦 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone <repository_url>
cd pandas-weather
```

### 2️⃣ Install Dependencies (if applicable)
```bash
npm install
# or
pip install -r requirements.txt
```

---

## 🔑 Environment Variables (IMPORTANT)
Create a `.env` file in the root folder:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here

REACT_APP_WEATHER_URL=your_api_url_here

REACT_APP_WEATHER_HISTORY_URL=your_api_url_here
```

> ⚠️ You **must** sign up on a weather API provider to get your own API key.

---

## ▶️ Running the App
```bash
npm start
```
or simply open `index.html` if it's a pure HTML/JS app.

Visit:  
```
http://localhost:3000
```

---

## 📂 Folder Structure (optional)
```
weather-panda/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Add_new_weather.js
│   │   ├── clock.js
│   │   ├── Navbar.js
│   │   ├── Weather.js
│   │   └── Weatherdetails.js
│   │
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .env.local        # contains API keys (ignored in Git)
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── dsad.html 
```

---

## 📜 Made By
Mohammed Faizan

