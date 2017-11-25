# To Do List - React Application

A React web application to manage a To Do list.

<https://lykims-todo-list.herokuapp.com/>

## Development Tools

* MongoDB
* Express.js
* React
* Node.js
* ~~Stormpath (for user authentication) is deprecated.~~
* Material Design

## Getting Started

* Clone the repository

* Install packages :

```
$ npm install
```

* Create the file `mongolab.json` in the `config` directory and add the following in the file :

```
{
    "uri": "YOUR_URI_STARTING_WITH_mongodb://"
}
```

* Run the program with the following command :

```
$ node server.js
```

* To see debug logs in the console, run :

```
$ DEBUG=express:* node server.js
```

* It might take a while to connect to the database. The web application is ready when there is the message :

```
$ =====> APP IS READY!
```

## Resources
* MongoDB : <https://mlab.com/>
* Express : <http://expressjs.com/>
* Facebook's React : <https://facebook.github.io/react/>
* Node.js : <https://nodejs.org/>
* Google's Material Design : <http://www.material-ui.com/>
* <https://unsplash.com/> for free high-resolution photos
