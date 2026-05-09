# ⚡ PokeWeather

> Real weather. Real Pokémon. A futuristic cyberpunk weather app that matches your city's weather to a Pokémon.

## 🌐 Live Demo

**[▶ Open PokeWeather](https://naveenkumar-arch.github.io/POKE_WEATHER/)**

---

## 🎮 What It Does

Search any city → get live weather → see the matching Pokémon with full stats, animated background effects, and a Pokémon cry button.

| Weather | Pokémon |
|---|---|
| ☀️ Clear | Charizard |
| 🌧️ Rain | Squirtle |
| ⛈️ Thunderstorm | Pikachu |
| ❄️ Snow | Glaceon |
| ☁️ Clouds | Dragonite |
| 🌫️ Mist / Fog | Gengar |
| 🌦️ Drizzle | Psyduck |
| 🌈 Default | Eevee |

---

## ✨ Features

- 🔍 Search any city worldwide
- 🌤️ Live weather via OpenWeatherMap API
- 🎮 Pokémon data via PokéAPI (free, no key needed)
- 🎨 Dynamic neon gradients per weather condition
- 🌧️ Animated weather particles (rain, snow, lightning, fog, sun glow)
- 📊 Pokémon base stats with animated bars
- 🔊 Pokémon cry sound button
- 💡 Random Pokémon facts
- 🌙 Dark / Light mode toggle
- 📱 Fully responsive mobile-friendly design
- 🎭 Demo mode while API key activates

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| OpenWeatherMap API | Live weather data |
| PokéAPI | Pokémon data |

---

## 🚀 Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/naveenkumar-arch/POKE_WEATHER.git
cd POKE_WEATHER
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Create a `.env` file in the root:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

Get a free key at [openweathermap.org/api](https://openweathermap.org/api)

> **Note:** New API keys take up to 2 hours to activate. The app runs in demo mode until then.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx         # City search input
│   ├── WeatherCard.jsx       # Weather info display
│   ├── PokemonCard.jsx       # Pokémon details card
│   ├── StatBar.jsx           # Animated stat bars
│   ├── WeatherParticles.jsx  # Rain/snow/lightning effects
│   ├── LoadingSpinner.jsx    # Loading animation
│   ├── ErrorMessage.jsx      # Error display
│   └── ThemeToggle.jsx       # Dark/light mode button
├── hooks/
│   └── usePokeWeather.js     # Main data-fetching hook
├── services/
│   ├── weatherService.js     # OpenWeatherMap API calls
│   └── pokemonService.js     # PokéAPI calls
└── utils/
    ├── weatherMapping.js     # Weather → Pokémon mapping
    └── pokemonFacts.js       # Random Pokémon facts
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_WEATHER_API_KEY` | Your OpenWeatherMap API key |

> **Never commit your `.env` file.** Add it to `.gitignore` to keep your API key private.

---

## 📸 Screenshots

### ☀️ Clear Weather → Charizard
Sunny golden neon theme with glowing sun effect.

### 🌧️ Rain → Squirtle
Blue neon theme with animated falling rain particles.

### ⛈️ Thunderstorm → Pikachu
Purple neon theme with lightning flash overlay.

### ❄️ Snow → Glaceon
Ice blue theme with falling snowflake particles.

---

## 📜 License

MIT — free to use and modify.

---

<p align="center">Built with ❤️ using React + Vite + Tailwind CSS</p>
