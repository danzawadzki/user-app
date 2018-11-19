An application displaying a user profile with comments.

## ‍💻 Technologies & related stuff

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

## 📝 Architectural decisions

The project was to use the best React assumptions in the form of focusing on the division into as many components as possible. Each component has been provided with:

1. `.tsx` file with component logic and static typing.
2. `.scss` file with separated styles.
3. `.test.tsx` file with unit tests.
4. `.md` file with documentation containing live examples

The assumption of the application was to use as few external dependencies as possible, which is why I decided to not use the bootstrap framework and few other commonly used libraries.

## ⚡ ️How to run it

To launch application you have to first start server with `npm run server` and after that, run app in the development mode `npm start`.

## 🔨 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run server`

Runs the app fake rest api on the [http://localhost:8080](http://localhost:8080). Path of the json file, which i use as a db mockup `src/json_server/db.json`.</br>
To better simulate a http request to an external restful api, all server responses have been delayed by 1000ms.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm test --coverage`

Launches the test runner and shows project tests coverage.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run styleguide`

Runs the react-styleguidist local docs server on the [http://localhost:6060](http://localhost:6060)

### `npm run styleguide:build`

Builds the react-styleguidist docs in the `src/styleguide` folder.

### `npm run lint`

Runs tslint static analyze, through components and containers folders.

### `npm run analyze`

Runs source-map-explorer to show, where code bloat is coming from. To analyze the bundle run the production build then run the analyze script.

## 📕 TODO

List of the things to add and errors to remove in the project.

1. Add a wrapper (hoc) for the basic element animation with the React-Transition-Group library.
2. Test redux reducers and actions.

## ✋ Social profiles:

Portfolio: [danielzawadzki.com](http://danielzawadzki.com/)<br/>
Twitter: [@danzawadzki9](https://twitter.com/danzawadzki7)<br/>
Codepen: [@danzawadzki](https://codepen.io/danzawadzki/)<br/>
Medium: [@danzawadzki](https://medium.com/@danzawadzki)<br/>
Linkedin: [@danzawadzki](https://www.linkedin.com/in/danzawadzki/)

## License

This project is licensed under the MIT License.
