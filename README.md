# Remote debugging with Weinre

The intent of this project is to setup a remote debugging session with Weinre. 

## Installation
This implementation of the Weinre remote debugger runs as a [GulpJS](http://gulpjs.com/) task on top of [Node JS](https://nodejs.org/).

Install https://nodejs.org/

Then install all dependencies for this gulp task
   
    npm install

    npm install -g gulp

## Start
  
    gulp

By default Weinre will be started on your local IP address (*eg. 192.168.1.11*) on port **9090** (http://localhost:9090).

By supplying parameters to the Gulp task, we can change that. The following command will start a server on localhost (*127.0.0.1*) on port 8888 (http://127.0.0.1:8888)<br />

  gulp --host=127.0.0.1 --port=8888

###parameters###
**host** can be any hostname or IP address <br />
**port** can be any valid port number. You'll get an *EADDRINUSE* error when the port is already in use

## Reading

http://people.apache.org/~pmuellr/weinre-docs/latest/