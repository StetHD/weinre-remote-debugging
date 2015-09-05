# Remote debugging with Weinre

The intent of this project is to setup a remote debugging session with Weinre. 

## Installation

Install https://nodejs.org/

    npm install


## Start
  
    gulp

By default Weinre will be started on **-all-** hosts on port **9090** (http://localhost:9090).

    gulp --host=127.0.0.1 --port=8888

By supplying parameters to the Gulp task, we can change that. The above command will start a server on localhost on port 8888 (http://127.0.0.1:8888)<br />

###parameters###
**host** can be any hostname or IP address <br />
**port** can be any valid port number. You'll get an *EADDRINUSE* error when the port is already in use
