const{
    name,
    menu,
    operations
    } = require("./src/methods.js");

const{
    log,
    tab
} = require("./src/util.js");

const{
    welcomeScreen 
} = require("./src/welcome.js");

const start = function(){
welcomeScreen();
name();
const option = menu();
}
start();