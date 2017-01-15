# To Do List - React Application

A React web application to manage a To Do list.

## Development Tools

* MongoDB
* Express.js
* React
* Node.js
* Stormpath (for user authentication)
* Bootstrap

## Getting Started

* Clone the repository and install packages :

```
$ npm install
```

* Create a Stormpath account and application at <https://stormpath.com/>

* Create the file `stormpath.json` in the `config` directory and add the following in the file :

```
{
    "client": {
        "apiKey": {
            "id": "YOUR_API_KEY_ID",
            "secret": "YOUR_API_KEY_SECRET"
        }
    },
    "application": {
        "href": "YOUR_APP_URL_STARTING_WITH_https://api.stormpath.com/v1/applications/"
    }
}
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

* It might take a while for the Stormpath SDK to be ready. The web application is ready when there is the message :

```
$ =====> APP IS READY!
```
