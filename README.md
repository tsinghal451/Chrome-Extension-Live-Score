# Cricket Live Score Chrome Extension

This Chrome extension enables users to access live cricket scores directly within their browser using the Cricket Data API. The extension leverages asynchronous JavaScript to fetch real-time match data and presents it in an organized manner, including match names, statuses, and live scores.

## Installation

To utilize this extension, follow these straightforward steps:

1. Clone or download the repository to your local machine.
2. Open your Chrome browser and navigate to `chrome://extensions/`.
3. Activate Developer mode in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned or downloaded the repository.
5. The extension will be successfully installed and will appear in your Chrome browser's toolbar.

## Usage

Once installed, the extension will automatically retrieve live cricket match data from the Cricket Data API. Simply click on the extension icon in the browser toolbar to view the latest match information in a popup window.

## Features

- Real-time live cricket scores.
- Display of match names, statuses, and live score details.
- Asynchronous data fetching ensures optimal performance.
- Automatic updates with the most recent match information.

## How It Works

The extension employs an asynchronous JavaScript function called `getMatchData()` to fetch match data from the Cricket Data API. This function sends a GET request to the API endpoint `https://api.cricapi.com/v1/currentMatches` with the necessary API key. It then filters the response to extract pertinent information for ongoing matches and formats it appropriately for display.

The extracted data encompasses match names, statuses, and live score details like runs, wickets, and overs. Subsequently, the formatted data is injected into the extension popup HTML, where it is presented to the user.

## Contributing

Contributions to this project are highly encouraged! If you wish to contribute, please submit a pull request with your proposed changes.

## Credits

This extension is developed and maintained by [Tushar Singhal](https://github.com/tsinghal451).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute the code in accordance with the terms of the license.
