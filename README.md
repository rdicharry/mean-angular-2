# MeanAngular2

This project is a simple demo app that allows the user to imput two locations and uses the Google Maps API to find the distance and driving time between the two points.

This project was generated in part with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

This project was adapted from this [tutorial](https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli).

# To Create a Local Deployment:

0.) Install Node and npm, if necessary.

1.) Download and unzip the repository.

2.) From the project root, run `npm install`.

3.) Create a file `config.json` holding the Google Maps API key as follows:
`{
	"key": [your API key]
	}`
	The key should be enabled for Google Static Maps API and Google Maps Distance Matrix API.
	The file should be located in `/server/routes/config.json`.
	
4.)Run the build using the following command from the project root directory: `node_modules/angular-cli/bin/ng build`.

6.) Start the server by typing `node server.js` from the project root.

5.) Open a browser at https://localhost:3000 to view the project.


