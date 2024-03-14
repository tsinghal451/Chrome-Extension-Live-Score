## Cricket Live Score Chrome Extension
This Chrome extension allows users to view live cricket scores directly from the browser using the Cricket Data API. The extension fetches real-time data asynchronously and displays relevant match details including match name, status, and live scores.

## Installation
 
 To use this extension, follow these steps:

1. Clone or download the repository to your local machine.
2. Navigate to chrome://extensions/ in your Chrome browser.
3. Enable Developer mode in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned or downloaded the repository.
5. The extension should now be installed and visible in your Chrome browser.

## Usage

Once the extension is installed, it will automatically fetch live cricket match data from the Cricket Data API and display it in a popup window when clicked on the extension icon in the browser toolbar.

## Features

 Real-time live cricket scores.
 Displays match name, status, and live score details.
 Asynchronous fetching of data for efficient performance.
 Automatically updates with the latest match information.

## How It Works
 
 The extension fetches match data from the Cricket Data API using an asynchronous JavaScript function getMatchData(). This function makes a GET request to the API endpoint https://api.cricapi.com/v1/currentMatches with the required API key. It then filters the response to extract relevant data for ongoing matches and formats it for display.

 The extracted data includes match name, status, and live score details such as runs, wickets, and overs. Finally, the formatted data is injected into the extension popup HTML, where it is displayed to the user.

## Contributing
   
   Contributions are welcome! If you'd like to contribute to this project, feel free to submit a pull request with your changes.

## Credits

   This extension is created and maintained by Tushar Singhal.

## License
   
   This project is licensed under the MIT License. Feel free to modify and distribute the code as per the terms of the license.
