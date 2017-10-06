## Welcome System React-Redux Application Code

## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#getting-started)
3. [Running the Project](#running-the-project)
4. [Live Development](#local-development)
    * [Hot Reloading](#hot-reloading)
    * [Redux DevTools](#redux-devtools)
5. [Routing](#routing)

## Requirements
* node `^5.0.0`
* npm `^3.0.0`

## Installation

Use command **`sudo apt-get install -y nodejs`** to install latest version of node in Ubuntu(Linux).

After confirming that your environment meets the above [requirements](#requirements), you can start the project by doing the following:

The project has the following things incorporated

1. Express server running through webpack middleware
2. eslint configured with specific rules
3. babel-node setup to write full ES^ code in node
4. precommit hook setup to run custom script before any git commit
5. webpack plugins configured to create optimized and minimized production build
6. Support for ejs to use server side rendering if required
7. dotevn setup, to set environment variables
____

+ Make sure to run cp .env.example .env command for the first time after you clone the repo.

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

+ **`npm install`** to install the dependencies in the local node_modules folder.

+ **`npm start`** to run the server in development mode through webpack middleware.

  To access the server, navigate to `http://localhost:3001`

+ **`npm run build`** create a development build in `build` folder
`cd` to `build/` and the run command `node server` to run server in development mode
  
  To access the server, navigate to `http://localhost:3000`

+ **`npm run build:production`** create a production build in `build` folder
`cd` to `build/` and the run command `node server` to run server in production mode

  To access the server, navigate to `http://localhost:3000`

+ **`npm run lint:changed`** to run eslint against the last changes files

+ `precommmit` is configured to run `eslint` before any commits
  Make sure you fix all lint errors before commiting your code

## Live Development

### Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`npm start`). This feature is implemented with webpack's [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) capabilities, where code updates can be injected to the application while it's running, no full reload required. Here's how it works:

* For **JavaScript** modules, a code change will trigger the application to re-render from the top of the tree. **Global state is preserved (i.e. redux), but any local component state is reset**. This differs from React Hot Loader, but we've found that performing a full re-render helps avoid subtle bugs caused by RHL patching.

* For **Sass**, any change will update the styles in realtime, no additional configuration or reload needed.

### Redux DevTools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn't require installing any packages in your project.

## Routing
We have used `react-router-dom` to define units of logic within our application. See the [project structure](#project-structure) section for more information.
