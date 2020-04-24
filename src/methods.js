const{
    log,
    tab
} = require("./util.js");

var readlineSync = require("readline-sync");

var chalk = require("chalk");



const name = function(){
var name = readlineSync.question(chalk.yellowBright("Enter your name here:-"));
    console.log(chalk.yellowBright("   Hi " + name + "!"));
}


const menu = function(){
    var option = readlineSync.question(chalk.cyanBright(tab+"These are the operations you can do:-\n\n\t\t\t1.  ADD(+)\t\t\t\t2.  SUBTRACT(-)\n\t\t\t3.  PRODUCT(*)\t\t\t\t4.  DIVIDE(/)\n\t\t\t5.  SQUARE(x^2)\t\t\t\t6.  CUBE(x^3)\n\t\t\t7.  PERCENTAGE(%)\t\t\t8.  Exit\n\nHit the numeric value as directed:-")); 
    operations(option);    
}


const operations = function(option){
      if(option==1){
          add();
          menu();
      }
      else if(option==2){
          subtract();
          menu();
      }
      else if(option==3){
          multiply();
          menu();
      }
      else if(option==4){
          divide();
          menu();
      }
      else if(option==5){
        square();
        menu();
    }
    else if(option==6){
        cube();
        menu();
    }
      else if(option==7){
         percentage();  
         menu();
      }
      else if(option==8){
          log(chalk.blueBright(tab+ "Thankyou for using this~~~~~~~~~~~~Hope your experience was best"));
          return;
      }
      else{
          log(chalk.red("ERROR:  Please enter valid choice"));
          menu();
      }
}
 

const add = function(){
    var number1 = readlineSync.question(chalk.yellowBright("Enter first number: "));
    var number2 = readlineSync.question(chalk.yellowBright("Enter second number: "));
   var sum = (+number1) + (+number2);
    log(number1 + " + " + number2 + " is "  + sum);
    }



const subtract = function(){
    var number1 = readlineSync.question(chalk.yellowBright("Enter first number: "));
    var number2 = readlineSync.question(chalk.yellowBright("Enter second number: "));
   var sub = number1 - number2;
    log(number1 + " - " + number2 + " is "  + sub);
}


const multiply = function(){
    var number1 = readlineSync.question(chalk.yellowBright("enter first number: "));
    var number2 = readlineSync.question(chalk.yellowBright("enter second number: "));
   var product = number1 * number2;
    log(number1 + " * " + number2 + " is " + product);
}


const divide = function(){
    var number1 = readlineSync.question(chalk.yellowBright("Enter first number: "));
    var number2 = readlineSync.question(chalk.yellowBright("Enter second number: "));
   var div = number1 / number2;
    log(number1 + " / " + number2 + " is " + div);
}


const percentage = function(){
    var number = readlineSync.question(chalk.yellowBright("Enter the number: "));
    var howMuchPercent = readlineSync.question(chalk.yellowBright("Enter the percent: "));
    var  percent = (number*howMuchPercent)/100;
    log(howMuchPercent +"%" + " of " + number + " is " + percent);
}

const square = function(){
    var number = readlineSync.question(chalk.yellowBright("Enter the number: "));
    var squaredNumber = number * number;
    log("Square of " + number + " is " + squaredNumber);
}

const cube = function(){
    var number = readlineSync.question(chalk.yellowBright("Enter the number: "));
    var cubed = number * number * number;
    log("Cube of " + number + " is " + cubed);
}

module.exports = {
    name,
    menu,
    percentage,
    operations
}