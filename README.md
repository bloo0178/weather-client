# Description: 
React app created to show current weather and forecast. This pulls data from a custom backend API I created that proxies the request through to OpenWeatherMap and cleans up the data before returning it. 

# Future Updates: 
- Make submit work with onEnter
- Optimize SVG's. Poor performance on some mobile devices.
- Current React-Places-Autocomplete component has bug where I can't limit search results to just cities. Look for a new autocomplete component or figure out a workaround. 
- Weather API has limitations around data available on free-tier. Current-day forecast only shows 6PM and 9PM. Look into using another API. Possibly switch to Dark Sky paid API. 

# Key Dependencies: 
- [https://openweathermap.org/api] (Weather data)
- [https://www.npmjs.com/package/axios] (Promise-based HTTP client for API)
- [https://www.npmjs.com/package/google-maps-react] (Used for wrapping Places API Key)
- [https://www.npmjs.com/package/moment] (Date parsing/ formatting)
- [https://www.npmjs.com/package/dotenv] (Read environment variables)
- [https://github.com/hibiken/react-places-autocomplete] (Used for searching locations and returning latitude/longitude to use with Open Weather API)

# API Keys Needed to Run: 
- Google Places API
- Open Weather API
