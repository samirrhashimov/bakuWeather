<h1 align="center">bakuWeather – Weather Application</h1>

<p align="center">
<img src="https://skillicons.dev/icons?i=html,css,js,react,netlify" />
</p>
<p align="center">
   <img src="https://img.shields.io/github/license/samirrhashimov/bakuWeather?style=flat">
   <img src="https://img.shields.io/github/repo-size/samirrhashimov/bakuWeather?style=flat">
   <img src="https://img.shields.io/github/languages/top/samirrhashimov/bakuWeather?style=flat">
</p>

<p align="center">This application provides current weather information for selected cities. Built with modern React and SPA architecture, it offers a smooth and user-friendly interface for fast city navigation.</p>

## Features

- **React-based SPA**: Single-page application for fast, seamless usage.
- **Map integration**: Select cities directly from a map.
- **City list selection**: Choose from a list of supported cities.
- **Client-side routing**: Navigation to city pages via React Router.

## Supported Cities

| City        | Route Path      |
|------------|----------------|
| Baku       | `/baku`        |
| Sumgait    | `/sumgait`     |
| Guba       | `/guba`        |
| Sheki      | `/sheki`       |
| Gabala     | `/gabala`      |
| Shamakhi   | `/shamakhi`    |
| Ganja      | `/ganja`       |
| Mingachevir| `/mingachevir` |
| Yevlakh    | `/yevlakh`     |
| Nakhchivan | `/nakhchivan`  |
| Shusha     | `/shusha`      |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samirrhashimov/bakuWeather.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm run dev
   ```

## Production Build

```bash
npm run build
```
- After building, ensure the server supports SPA routing. For example, on Netlify, use a `_redirects` file to route all paths to `index.html`.

## Technologies

- React.js
- React Router
- CSS/HTML
- SimpleMaps (Map integration)
- Open Meteo (Weather API)

## License
This project is licensed under the **MIT License**. For more details, see the [LICENSE](LICENSE) file.

---
## Support

For issues and questions, please open an issue on GitHub.

