[![Build Status](https://secure.travis-ci.org/martinmicunda/chitter-prototype.png)](http://travis-ci.org/martinmicunda/chitter-prototype) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/martinmicunda/chitter-prototype/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

Chitter Prototype
=================

Chitter allows developers to share useful information quickly and informally using a social, micro-blogging approach.

The main task of the project is to develop prototype that will be present to the rest of the [Asidua](http://asidua.com/) (Chitter) group so group can decide which prototype to move forward with to develop Chitter Application.

[Click here to see it in action!](http://chitter-prototype.herokuapp.com/)

* Login Details:

    ```
    username: chitter
    password: chitter123
    ```
    
Development Principles
----------------------

+ Chitter will be developed using responsive web design techniques
+ Chitter will be developed using suitable JavaScript and CSS frameworks
+ Chitter will be developed in a manner that does not tie it to one specific database type
+ Chitter will be developed in line with modern web architectural patterns
+ Chitter will be developed in a manner that will support the addition of mobile clients in the future
+ Chitter will be developed using Behaviour Driven Development (BDD)
+ Chitter will be developed using Continuous Integration, Delivery & Deployment
+ Chitter will be developed in a manner that will support public cloud deployment
+ Chitter will be developed using freely available tools and frameworks (no Asidua licenses will be required)
+ Chitter will be developed using tools and frameworks that are not tied to a single platform (e.g. Windows)

Technologies Used
------------------
* **Client Side:**
    * [AngularJS](http://angularjs.org/)
    * [HTML5](http://www.w3.org/TR/2011/WD-html5-20110525/)
    * [CSS3](http://www.w3.org/TR/2001/WD-css3-roadmap-20010523/)
    * [Bootstrap 3](http://getbootstrap.com/)
    * [underscoreJS](http://underscorejs.org/) 

* **Server Side:**
    * [NodeJS](http://nodejs.org/)
    * [ExpressJS](http://expressjs.com/) 
    * [MongoDB](http://www.mongodb.org/)

* **Development & Deployment:**
    * [Grunt](http://gruntjs.com/)
    * [Travis CI](https://travis-ci.org/)

* **Test:**
    * [Jasmine](https://jasmine.github.io/)
    * [Karma](http://karma-runner.github.io/)

Architecture Diagram
--------------------

![Chitter Architecture Diagram](/_resources/diagrams/architecture_diagram.png "Chitter Architecture Diagram")

Installation
----------------------

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.0)
* [Install Grunt](http://gruntjs.com/) as global npm modules (requires node.js version >= 0.8.0):

    ```
    npm install -g grunt-cli
    ```

### Client App

Our client application is a straight HTML/Javascript application but our development process uses a Node.js build tool
[Grunt.js](gruntjs.com). Grunt relies upon some 3rd party libraries that we need to install as local dependencies.

* Install local dependencies (navigate to chitter-prototype directory):

    ```
    cd client
    npm install
    cd ..
    ```

(Note: If you are getting error with github try this "git config --global url."https://".insteadOf git://")

### Server App

Our backend application server is a NodeJS application that relies upon some 3rd Party npm packages. You need to install these:

* Install local dependencies (navigate to chitter-prototype directory):

    ```
    cd server
    npm install
    cd ..
    ```

Running
----------------------

### Start the Server

There are two options how to run application (command line or Intellij IDEA)

####From command line
* Run the server (the command will automatically opens web browser)

    ```
    node server/server.js    
    ```

* Browse to the application at [http://localhost:3000]

####From Intellij IDEA
Install Node plugin for your Intellij and then go to Edit -> Edit Configurations and set details as it show below 

![Run Chitter Server from Intellij IDEA](/_resources/images/node_server.png "Run Chitter Server from Intellij IDEA")

Development
----------------------

### Continuous Building
The watch grunt task will monitor the source files and run the default build task every time a file changes (it will refresh browser for you).

####From command line

```
cd client
grunt watch 
```

####From Intellij IDEA

![Run Grunt watch task](/_resources/images/grunt_watch.png "Run Grunt watch task")

Screenshots
------------
![Login screenshot](/_resources/images/login.png "Login screenshot")

![Home screenshot](/_resources/images/home.png "Home screenshot")

Authors
-------
[![Martin Micunda] (http://www.gravatar.com/avatar/5bce24c9beed55aaee9feca545defb8e.png?s=144)](https://github.com/martinmicunda) | [![Christopher Laughlin] (http://www.gravatar.com/avatar/2ff062148633bce06aa972be0ff1c244.png?s=144)](https://github.com/chrislaughlin)
:---:|:---:
[Martin Micunda] (https://github.com/martinmicunda) | [Christopher Laughlin] (https://github.com/chrislaughlin)

## License

Copyright (c) 2013 Martin Micunda & Christopher Laughlin, [MIT License](http://en.wikipedia.org/wiki/MIT_License)
