# This project is using a weatherAPI

All the source files is inside the src file.

# In the project directory, you can run:

## npm start

Runs the app in the development mode.
Open [http://localhost:1234](http://localhost:1234) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## npm run build

Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## npm run report

generate an HTML file containing a tree map that shows the relative size of each asset in every bundle visually.

## npm run deploy

Deploys the app into the github repository.

[gh-pages -b master -d dist] (gh-pages -b {branch} -d {folder})

## All the dependencies and scripts are listed below:

```javascript
  "scripts": {
    "start": "parcel ./src/index.html",
    "build": "parcel build ./src/index.html",
    "deploy": "gh-pages -b master -d dist",
    "report": "parcel build src/index.html --reporter @parcel/reporter-bundle-analyzer"
  },
  "dependencies": {
    "bootstrap": "^5.2.0",
    "gh-pages": "^4.0.0"
  },
  "devDependencies": {
    "@parcel/compressor-brotli": "^2.7.0",
    "@parcel/compressor-gzip": "^2.7.0",
    "@parcel/reporter-bundle-analyzer": "^2.7.0",
    "parcel": "^2.7.0"
  }

```
