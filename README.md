Description: 
React app created to show current weather and 5-day forecast. This was done to get more experience with structuring a React project and working with/ displaying data from a third-party API. 

Learnings: 
-Using .env with React (previous experience using with Node)
-Leveraging Places API to autocomplete/ suggest location data 
-Higher Order Components 
-Fragments
-Context


Future Updates: 
-Make submit work with onEnter
-Add loading icons
-Assign keys to map items or use FRAGMENTS
-Refactor/ comment code
-Current React-Places-Autocomplete component has bug where I can't limit search results to just cities. Look for a new autocomplete component or figure out a workaround. 
-Weather API has limitations around data available on free-tier. Current-day forecast only shows 6PM and 9PM. Look into using another API. 

Libraries/ Packages Used: 
-https://openweathermap.org/api (Weather data)
-https://reactstrap.github.io/ (Styling - Bootstrap 4)
-https://www.npmjs.com/package/axios (Promise-based HTTP client for API)
-https://www.npmjs.com/package/google-maps-react (Used for wrapping Places API Key)
-https://www.npmjs.com/package/moment (Date parsing/ formatting)
-https://www.npmjs.com/package/dotenv (Read environment variables)
-https://github.com/hibiken/react-places-autocomplete (Used for searching locations and returning latitude/longitude to use with Open Weather API)

Keys Needed to Run This: 
-Openweather API
-Google Places API