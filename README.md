# This project is using a weatherAPI

All the source files is inside the src file.

# In the project directory, you can run:

## npm start

Runs the app in the development mode.
Open [http://localhost:1234](http://localhost:1234 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## npm run build

Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## npm run deploy

Deploys the app into the github repository.

### [gh-pages -b master -d dist] (gh-pages -b {branch} -d {folder})

All the dependencies and scripts are listed below:

```javascript
"scripts": {
   "start": "parcel ./src/index.html",
   "build": "parcel build ./src/index.html",
   "analyze": "source-map-explorer ./dist/*js",
   "deploy": "gh-pages -b master -d dist"
 },
 "dependencies": {
   "bootstrap": "^5.2.0",
   "gh-pages": "^4.0.0",
   "parcel-bundler": "^1.12.5",
   "source-map-explorer": "^2.5.2"
 }

```
