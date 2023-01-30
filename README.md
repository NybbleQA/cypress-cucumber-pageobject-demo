[![Cypress Tests](https://github.com/NybbleQA/cypress-cucumber-pageobject-demo/actions/workflows/run_tests.yml/badge.svg)](https://github.com/NybbleQA/cypress-cucumber-pageobject-demo/actions/workflows/run_tests.yml)


#####	TL;DR README	##### 

		# DEPENDENCIES
			- NODE.JS 16
			- DOCKER ver. 20
			- GITHUB ACCOUNT

		# INSTALLATION
			- run "npm install" in CLI, inside the project's folder
		
		# RUN

			- run "npm run cypress:run" in CLI, inside the project's folder

******************************** 1) GLOBAL DEPENDENCIES ********************************

	- Node.JS --> Ver. 16.17.0 (Windows - Current)
		https://nodejs.org/ (LTS VERSION IF POSSIBLE)

	- Git / Git Bash --> Ver. 2.31.1.windows.1 (Windows)
		https://git-scm.com/downloads

	- Git repository (Project)
		https://github.com/NybbleQA

	- Docker --> Ver. 20.10.17 (Windows - Current)
		https://www.docker.com/products/docker-desktop/


	- (Desired-Optional) Visual Studio Code --> Ver. 1.74.2 (Windows)
		https://code.visualstudio.com/download

	- (Desired-Optional) Java 8 (for running Allure reports)


******************************** 2) GENERAL ANNOTATIONS/ACRONYMS ********************************

	"Execute" = to run a command by console line (bash/powershell/cmd)

	"CL" = command line

	"RegEx" = regular expressions

	"POM" = page object model 

******************************** 3) CREATING FIRST PROJECT FROM SCRATCH ********************************

	**************************** 3.1) SET UP A NODE.JS PROJECT ****************************

	- Create a new folder
	- Execute Git Bash inside folder (or move to folder's directory manually through  git/powershell terminal)
	- Execute "npm init" --> Complete project's information =
		
		*package name: "cypress-10plus-demo"
		*version: 1.0.0 (default - just press enter)
		*description: "project to test instructions guideline"
		*entry point: (index.js) --> (default)
		*test command: "test"
		*git repository: your_repository_url
		*keywords: qa cypress testing javascript typescript
		*author: Whoever is reading this right now
		*license: "ISC" (default)

	(NOTE: ADDING "-y" parameter to "npm init" command will set fields by default and skip previous steps)

	- (Desired) Execute "code ." to open the folder in Visual Studio Code IDE // Or open project in any other IDE.

	**************************** 3.2) SET UP CYPRESS PROJECT ****************************

	- Execute "npm install cypress --save-dev"

	- Inside package.json, create a script (inside scripts section) named "script_name": "cypress open" and SAVE CHANGES --> This will generate the cypress folder structure
	- Execute "npm run script_name" --> Cypress client will open
	
	- Select "E2E Testing" option --> Cypress will list the files & folders added to the project
	- Click "Continue" button
	- Select a browser (Electron is the default one, native for Cypress)
	- Click "Start E2E Testing in selected_browser"
	- Close both cypress client and application

	**************************** 3.3) SET UP & RUN AN EXAMPLE TEST ****************************

	
	- Inside package.json, create a script (inside scripts section) named "script_run_name": "cypress run" and SAVE CHANGES
	- Execute "npm run script_run_name" --> Cypress runner will start executing in CL. -->
	("Can't run because no spec files were found." error message will display)

	- Inside "cypress/e2e" folder, create a filled called "example.cy.js" --> here we'll start writing tests with cypress methods library
	- Inside "example.cy.js" file, paste the following lines:

		describe('template spec for a login in todo.ly', () => {
	  		it('passes', () => {
	    		//  FIRST/SETUP ACTIONS - (GIVEN)
			    cy.visit('https://todo.ly')
			    //  ACTIONS OVER PAGE ELEMENTS - (WHEN)
			    cy.get('.HPHeaderLogin > a > img').click()
			    cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type("fhr1@fhr1.com")
			    cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type("12345")
			    cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()
			    //  ASSERTION/S (THEN)
			    cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout').should('be.visible')
	  		})
		})

	- Save changes (ALWAYS)

	- Now we can execute both "npm run" commands (from package.json) containing "cypress open" AND "cypress run" scripts --> both should get access to the created ".cy.js" example file and run the test.


	**************************** 4) PAGE OBJECT MODEL - CUCUMBER - BDD ****************************

		************* 4.1) ADDING DEPENDENCIES FOR CUCUMBER LAYER *************

		(NOTE: If any of the following install commands throws an ERROR, skip them and proceed to next step)

	- Execute "npm install @bahmutov/cypress-esbuild-preprocessor" in CL
	- Execute "npm install @badeball/cypress-cucumber-preprocessor" in CL
	- Execute "npm install @badeball/cypress-cucumber-preprocessor/esbuild" in CL
	- Execute "npm install @shelex/cypress-allure-plugin/writer" in CL
 
	- Inside "package.json" file, paste the following lines inside "dependencies" (IF NEEDED):

	    "@badeball/cypress-cucumber-preprocessor": "^15.0.0",
    	"@bahmutov/cypress-esbuild-preprocessor": "^2.1.5",
    	"@shelex/cypress-allure-plugin": "^2.34.0",
    	"esbuild": "^0.16.4",
    	"multiple-cucumber-html-reporter": "^3.0.1"

    - Execute "npm install" again to rewrite/fix any missing dependency

	- Inside "cypress.config.js" file, paste the following lines at the very beginning of the page (replacing the "const" current lines:

		const { defineConfig } = require("cypress");
		const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
		const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
		const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
		const allureWriter = require("@shelex/cypress-allure-plugin/writer");

	- Also in "cypress.config.js", paste the following lines just after the lines added in the previous step, replacing any other line but the "const" lines just added:

	async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

	  on(
	    "file:preprocessor",
	    createBundler({
	      plugins: [createEsbuildPlugin.default(config)],
	    })
	  );
	  allureWriter(on, config);

	  // Make sure to return the config object as it might have been modified by the plugin.
	  return config;
	}

	module.exports = defineConfig({
	  e2e: {
	    setupNodeEvents, //REPLACES "plugins" folder for older versions
	    specPattern: "cypress/e2e/features/*.feature",
	    baseUrl: "https://todo.ly/",
	    chromeWebSecurity: false,
	    env: {
	      allureReuseAfterSpec: true,
	    },
	  },
	});

	(NOTE: HERE WE ADDED THE REQUIRED METHODS/COMMANDS FOR:
	1- Preprocessor plugin setup
	2- Allure reports plugin setup
	3- Spec path setup
	4- Base URL setup
	5- Disable insecure content bocks/enable navigatin to any superdomain w/o cross-origin errors w/ or w/o cy.origin/accessing cross-origin iframes that are embedded in the application
	6- Enable compatibility for allure to work with plugins/preprocessors that register event listerners, especially "after:spec", to have access to results)


    **************** 4.2) CREATING FOLDER STRUCTURE FOR CUCUMBER IMPLEMENTATION ************************

    - Inside "cypress" folder, create a folder called "e2e" (IF NOT EXISTANT)
	- Inside "e2e" folder create a folder called "features"

    - Execute the script (listed in "package.json") ,containing "cypress run" instruction, inside once again.
    (NOTE: CL should throw an error related to the following folder path now: /C:\[your-path-to-project]\cypress\e2e\features\*.feature)

    - Inside cypress/e2/features, create "login_example.feature" file --> files written in gherkin language defining a "feature" and its "scenarios"
    - Inside "login_example.feature" file, paste the following scenario:

    	Feature: Login

    		This feature will test login functionality for todo.ly web page

    		Scenario: Succesfull login with an existing user 

		    Given user enters todo.ly main page

		    When user clicks on [Login] button on todo.ly main page
		    And types 'fhr1@fhr1.com' in [Email] textbox  
		    And types '12345' in [Password] textbox  
		    And clicks [Login] button on Login modal

		    Then [Logout] button should be displayed on the top right of the page


	*********************** 4.3) POM: SETTING PAGES & STEP DEFINITIONS ************************

	- Inside "cypress" folder, create a new folder named "pages" or "pageObjects" --> "page_name.js" files will be allocated here

	- Inside "pages" folder, create the needed files for the test to run (1 per "view" on the frontend)

		*PAGES TO CREATE FOR THIS EXAMPLE = {"MainPage.js", "LoginModal.js", "HomePage.js"}
		*REFER TO GITHUB/DRIVE DOC. FOR PAGES CONTENT: 
			https://drive.google.com/file/d/1VQ03FPYaIHPvzkb4gjUIXYd2pUC6eN99/view?usp=sharing

	- In the main project's folder, create a file called "jsconfig.json"

	- Inside "jsconfig.json" file, paste the following lines:
		
		{
		    "compilerOptions": {
		        "baseUrl": ".",
		        "paths": {
		            "@pages/*": [
		                "./cypress/pages/*"
		            ]
		        }
		    }
		}

	(NOTE: this .json file will define compiler options for:
	1- an additional way to set up base URL besides "cypress.cofig.js" file
	2-folder path for cypress to look for "pages" .js files)


	*********************** 4.4) POM: STEP DEFINITIONS SET UP************************


	- Inside "Support" folder, create a folder named "step_definitions" --> tests' steps (previously located in "*.cy.js" extension files inside "e2e" folder) will be reallocated here

	- Inside "step_definitions" folder, create one file per ".feature" file, matching its name
	(TODO: DEFINE FILES USED / STEPS / COMMON_STEPS FILE)

	- Import { Given, When, Then } commands from @badeball/cy-cuc-preproc & created pages (exported in every file), by pasting the following lines:

		import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
		import  {mainPage} from "../../pages/MainPage"
		import { loginModal } from "@pages/LoginModal";
		import { homePage } from "@pages/HomePage";

	- Following the imports "Given, when, then" methods can be added, to match
	every sentence from the ".feature" file. 

		Here an example:

		Given("user does something*", () => 
		    {
		        cy.visit("/"); //** "/" refers to base URL (setted in .config.js)
		        //cy.visit("https://todo.ly/");
		    });

		When("user clicks on [Login] button on todo.ly main page", () => 
		    {
		        mainPage.clickLogin(); //***
		    });

		Then("[Logout] button should be displayed on the top right of the page", () => 
		    {
		        homePage.elements.logoutBtn().should('be.visible') //****
		    });


		     ******************************************************************************************
		    | References																				
		    |
		    |*. First parameter for every "given(), when(), then()" method will be
		    |	a string that preprocessor parses as a RegEx (MUST MATCH a ".feature"'s scenario step)
		    |**. "cy.visit("/")" is a method from cypress actions library, "/" is replaced by Base URL
		    |		when test is executed 
		    |***. "mainPage.clickLogin()" is a method implemented in "MainPage.js" to avoid accessing
		    | 		to the pages' elements through its raw locators
		    |****. method().should('condition.toAssert') is an assertions method from Cypress libraries
		   	 ******************************************************************************************


	************************ 5) REPORTING: ALLURE & JSON FORMATTER (INTERNAL) ************************ 	

		************* 5.1) GENERATE AND DISPLAY ALLURE REPORTS *************

		- Inside "package.json", in the "scripts" section, write a new script that'll look like this:
			"cypress:execution-allure": "cypress run --env allure=true"

		- in CL, execute the recently created script "npm run cypress:execution-allure"

		- Also create another script to generate the report based on the previous run:
			"allure:report": "allure generate allure-results --clean -o allure-report"


		- In CL, execute the recently created script by writing "npm run allure:report"

		- In CL, execute the command "allure open" to open the generated report in a browser.



	********************************************************************************
	
	************************ 6) DOCKERIZE PROJECT ************************

	
		************* 6.1)  DOCKERFILE & .DOCKERIGNORE FILE *************

		- First let's create a "dockerfile" : 

		-Inside this project's folder, create a file named "dockerfile" and another called ".dockerignore"

		-Inside "dockerfile", paste the following lines and save changes:

				FROM cypress/base
				COPY . .
				RUN npm install
				CMD npm run cypress:execution

		- Inside ".dockerignore" file, we will include the next for now:

			/node_modules/

		(NOTE: "node_modules" folder is generated by "npm install" command, which is utilized 
		inside our dockerfile)

		- in CL, execute "docker build . -t your_project_image" 

		- When our new image is done building, in CL execute "docker images" to list all
		existing images and verify it was created as "your_project_image"

		- in CL, execute "docker run you_project_image"


		************************ 7) INTEGRATE GITHUB ACTIONS ************************

		************* 7.1)  CREATING .YML FILE *************

		- First, this project should be working as intended and uploaded to a remote
		repository on github.

		- Inside the project folde, create a folder namde ".github"
		- Inside ".github" folder, create a folder named "workflows"
		- Inside "./.github/workflows" create a file named "run_tests.yml"

		-inside "run_tests.yml", paste the following code:

				name: Cypress Tests

				on: 
				push:
					branches:
					- main

				jobs:
				cypress-run:
					strategy:
					fail-fast: false #debuggin param - turn off before deploying to prod
					matrix:
						#os: [ubuntu-latest, macos-latest, windows-latest]
						browsers: [firefox, chrome, edge]
					runs-on: ubuntu-22.04

					steps:
					## Checkout a Git repository at a particular version under $GITHUB_WORKSPACE,
					# so your workflow can access it
					- name: Checkout
						uses: actions/checkout@v3
						with:
						fetch-depth: 0 #only will use last commit 
					
					- name: Setup Node.js
						uses: actions/setup-node@v2
						with:
						node-version: 16
					
					- name: Install Dependencies
						run: npm ci
					
					- name: Run Cypress Tests
						run: npm run cypress:run -- --browser ${{ matrix.browser }}

					- name: artifacts
						if: ${{ failure() || success()}}
						uses: actions/upload-artifact@v3
						with:
						name: ${{ matrix.browsers }}-test-reports
						path: /home/runner/work/cypress-cucumber-pageobject-demo/cypress-cucumber-pageobject-demo/cypress/reports

		(NOTE: indentation is key to .yml files, this code block is tabulated x2 after README.md tabulation)
		(NOTE2: "YAML" extension for VSCode users is recommended)

	- Save changes, and add-commit-push them to trigger the github actions run to start


	********************************************************************************