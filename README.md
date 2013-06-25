Chitter Prototype
=================

Chitter allows developers to share useful information quickly and informally using a social, micro-blogging approach.

The main task of the project is to develop prototype that will be present to the rest of the [Asidua](http://asidua.com/) (Chitter) group so group can decide which prototype to move forward with to develop Chitter Application.


Technologies Used
------------------
+ [AngularJS](http://angularjs.org/)
+ [NodeJS](http://nodejs.org/)
+ [MongoDB](http://www.mongodb.org/)
+ [HTML5](http://www.w3.org/TR/2011/WD-html5-20110525/)
+ [CSS3](http://www.w3.org/TR/2001/WD-css3-roadmap-20010523/)
+ [lessCSS](http://lesscss.org/)
+ [underscoreJS](http://underscorejs.org/) 
+ [Yeoman](http://yeoman.io/)

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

Installation
----------------------

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4)
* [Install Yeoman](http://yeoman.io/) as global npm modules (requires node.js version >= 1.0):

    ```
    npm install -g yo grunt-cli bower
    ```

### Client App

Our client application is a straight HTML/Javascript application but our development process uses a Node.js build tool
[Grunt.js](gruntjs.com) and dependencies tool [Bower.js](http://bower.io/). Grunt and Bower relies upon some 3rd party libraries that we need to install as local dependencies.

* Install local dependencies (navigate to chitter-prototype directory):

    ```
    cd client
    npm install
    bower install
    cd ..
    ```

(Note: If you are getting error with github try this "git config --global url."https://".insteadOf git://")

Running
----------------------

### Start the Server
* Run the server (the command will automatically opens web browser)

    ```
    cd client
    grunt server   
    ```

(Note: If you don't have Ruby and Compass installed in your system PATH then run "grunt server --force")


Authors
-------
+ [Martin Micunda](https://github.com/martinmicunda)
+ [Christopher Laughlin](https://github.com/chrislaughlin)

