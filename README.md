# Better Rentals

The purpose of this project is to showcase different ways of visualizing and processing property rental / sale advertisment data

## Installation

```sh
npm i
cd client
npm i
```

Create a file with the name `keys_dev.js` in the `.\config` folder, and add your Google API key there. E.g.:

```js
module.exports = {
  gmapsApiKey: 'your-api-key',
};
```

Set the correct path to your JSON/DB storage that contain the aggregated data from the advertisements in `./config/paths.js`.

## Running the project

Run the development server and client with

```sh
npm run dev
```
