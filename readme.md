sudo npm init -y
Password:
Wrote to /Users/richardmcpherson/Desktop/projects/REACT/reactspa/01_start/package.json:

{
  "name": "01_start",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
The above command run npm init to create the package.json file but skip the interview process

Create a webpack server to serve our file and automatically refresh when changes are made
using the command :
npm install --save-dev webpack webpack-dev-server


We don't need the ReactDOM library in the portfolio component because we are NOT rendering
anything in it. We are just creating the view

DESTRUCTORS
var obj = {from:'Richard', to:'Lystra'};

var {from, to} = obj;
//You are destructing the obj so you are getting the keys of the obj

console.log(from, to); produces Richard Lystra
You can also destruct a function
function Greetings({from='Richard2', to='Lystra2'}){
  return `Hello from ${from} to ${to}`;
}
console.log(Greetings(obj)); //output Hello from Richard2 to Lystra2

the onClick is not bound to the class. YOU MUST bind it in the constructor first
in order for the connection to exist
