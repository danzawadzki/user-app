An application displaying a user profile with comments.

## Technologies & related stuff

1. React
2. Typescript (with tslint)
3. SASS
4. Jest
5. Enzyme
6. font-awesome
7. husky
8. normalize.css
9. prettier
10. react-stylegudist

## Note
The assumption of the application was to use as few external dependencies as possible, which is why I decided to not use the bootstrap framework and few other commonly used libraries.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run server`

Runs the app fake rest api on the [http://localhost:8080](http://localhost:8080). The json file that I use as a makeshift base is in the folder `src/json_server/db.json`.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run styleguide`

Runs the react-styleguidist docs server on the [http://localhost:6060](http://localhost:6060)

### `npm run styleguide:build`

Builds the react-styleguidist docs to the `styleguide` folder.

### `npm run lint`

Runs tslint static analyze, through components and containers folders.

### `npm run analyze`

Builds project source map.

## How to run it

To launch application you have to first start server with `npm run server` and after that, run app in the development mode.
