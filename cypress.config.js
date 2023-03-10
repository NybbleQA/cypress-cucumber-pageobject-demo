const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
 
  require('cypress-mochawesome-reporter/plugin')(on);
  // on('before:run', async (details) => {
  //   console.log('override before:run');
  //   await beforeRunHook(details);
  // });

  // on('after:run', async () => {
  //   console.log('override after:run');
  //   await afterRunHook();
  // });


  //allureWriter(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,//(on, config) {
      // implement node event listeners here
    //},
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.todo.ly",
    chromeWebSecurity: false,
    env: {
    allureReuseAfterSpec: false,
    },
  },
});
