# Employee MatchMaker
This application was created as an assignment to show off routing.  By filling out the survey, it will take the results and match you with the person closest to your overall results.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure that you have Node.js installed on your computer to run the server.  

```
npm install
```
If a regular npm install doesn't work, run the following installations to get the application running.

```
npm install express
```

### Installing
A simple basic npm install should be all that is needed to get the app up and running when launching the server.
```
npm install
```
If a regular npm install doesn't work, run the following installations to get the application running.

```
npm install express
```

## Running the tests

Start the server with node server.js and open your browser to localhost:8080.  You should be greated with the employeefinder page and by clicking the survey button will be taken to the survey page.  Fill out the survey, click submit at the bottom and a modal will pop-up with your result.  See the findMatch function in app/public/js/survey.js file to change the algorithm to something else.

## Built With

* [bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - The web framework used

## Contributing

Please send a message if you would like to make a pull request.

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **Thomas Gettler** - [tcgettler](https://github.com/tcgettler)
