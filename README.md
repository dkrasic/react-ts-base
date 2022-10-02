# REACT-TS-APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). On top of it `prettier` was added as the code formater, `eslint` in configured and `husky` is used for the pre-commit hook.`styled-components` are used for style implementations.

This project should be used as the base for other projects that require similar tech stack.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Styling

We are using `styled-components` for style implementations and there are also global styles specified in `src/styles/GlobalStyles.tsx` and the `MainTheme` specified in `src/styles/theme.tsx`.

## Testing

`jest` framework and `react-testing-library` are used for unit tests. Use `npm test` to run tests.

## Linting

We define linting in `.eslintrc.json`. In `rules` you can define additional rules that will be applied to all `.js(x)` and `.ts(x)` files. However in overrides we can specify the rules that will only be applied to `.ts(x)` files.

Together with the VSCode extension for ESLint we can have

## Prettier

Prettier is set as the default code formatter and its configuration can be modified in `.prettierrc.json` file. We also have `.prettierignore` file used to specify what files should not be formatted with prettier.

## Checks before commit

We are using `husky` to specify the `pre-commit` hook. Together with `lint-staged` we are specifying that before each commit we want to execute `prettier`, `linting` and `tests` on all the staged files.
