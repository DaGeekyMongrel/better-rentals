# Better Rentals

The purpose of this project is to showcase different ways of visualizing and processing property rental / sale advertisment data

## Installing dependencies

```sh
npm i
cd client
npm i
```

## Setting up the environment

- Set the correct path to your JSON/DB storage that contain the aggregated data from the advertisements in `./config/paths.js`.

- Create `./client/.env.local` and add your Google Maps API key:

  ```
  REACT_APP_GMAPS_KEY = your-api-key
  ```

  Remember to never commit any of your API keys to public repositories!

## Running the project

Run the development server and client with

```sh
npm run dev
```
