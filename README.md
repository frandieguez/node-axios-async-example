Cli application to show weather info for an address

## Installation

```npm install```

Create a file .env with the API keys from GMaps and OpenWeather APIs:
```
GMAPS_API=your_api_key
OPENWEATHER_API=openweather_api_key
```

## Usage

```
$ node app.js
Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  --address, -a                                                       [required]
```

## Used libraries
- Yargs: parsing arguments and generating an elegant user interface.
- Axios: Promise based HTTP client for the browser and node.js
- ES7: As I use Async/Await
- dotenv: para gestion de las apis
