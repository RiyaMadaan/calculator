const{
    log,
    tab,
    clear
} = require("./util.js");

const{
    welcomeScreen
} = require("./welcome.js");


var readlineSync = require("readline-sync");

var chalk = require("chalk");

const start = function() {
    clear();
    welcomeScreen();
    // name();
    menu();
  }
  


const menu = function(){
    var message = "Hit the numeric value as directed:- "
    var option = readlineSync.question(chalk.cyanBright(tab+"\nThese are the operations you can do:-\n\n\t\t\t1.  ADD(+)\t\t\t\t2.  SUBTRACT(-)\n\t\t\t3.  PRODUCT(*)\t\t\t\t4.  DIVIDE(/)\n\t\t\t5.  SQUARE(x^2)\t\t\t\t6.  CUBE(x^3)\n\t\t\t7.  PERCENTAGE(%)\t\t\t0.  Exit\n\n" + message)); 
    operations(option);  
    return message;  
}


const operations = function(option, message){
      if(option==1){
          add();
          setTimeout(start, 3000);
        }
      else if(option==2){
          subtract();
          setTimeout(start, 3000);
      }
      else if(option==3){
          multiply();
          setTimeout(start, 3000);
      }
      else if(option==4){
          divide();
          setTimeout(start, 3000);
      }
      else if(option==5){
        square();
        setTimeout(start, 3000);
    }
    else if(option==6){
        cube();
        setTimeout(start, 3000);
    }
      else if(option==7){
         percentage();  
         setTimeout(start, 3000);
      }
      else if(option==0){
          log(chalk.yellowBright(tab+ "Thankyou for using this~~~~~~~~~~~~Hope your experience was best!!......"));
          return;
      }
      else{
          log(chalk.red("ERROR:  Please enter valid choice"));
          log(chalk.white("Try again"));
        setTimeout(start,2000);   
       
      }
}

const add = function(){
    var number1 = readlineSync.question(chalk.yellowBright("Enter first number: "));
    var number2 = readlineSync.question(chalk.yellowBright("Enter second number: "));
   var sum = (+number1) + (+number2);
    log(number1 + " + " + number2 + " => "  + sum);
    
    }



const subtract = function(){
    var number1 = readlineSync.question(chalk.yellowBright("Enter first number: "));
    var number2 = readlineSync.question(chalk.yellowBright("Enter second number: "));
   var sub = number1 - number2;
  log(number1 + " - " + number2 + " => "  + sub);
    
}


const multiply = function(){
    var number1 = readlineSync.question(chalk.yellowBright("enter first number: "));
    var number2 = readlineSync.question(chalk.yellowBright("enter second number: "));
   var product = number1 * number2;
    log(number1 + " * " + number2 + " => " + product);
    
}


const divide = function(){
    var number1 = readlineSync.question(chalk.yellowBright("Enter first number: "));
    var number2 = readlineSync.question(chalk.yellowBright("Enter second number: "));
   var div = number1 / number2;
    log(number1 + " / " + number2 + " => " + div);

}


const percentage = function(){
    var number = readlineSync.question(chalk.yellowBright("Enter the number: "));
    var howMuchPercent = readlineSync.question(chalk.yellowBright("Enter the percent: "));
    var  percent = (number*howMuchPercent)/100;
    log(howMuchPercent +"%" + " of " + number + " => " + percent);

}

const square = function(){
    var number = readlineSync.question(chalk.yellowBright("Enter the number: "));
    var squaredNumber = number * number;
    log("Square of " + number + " => " + squaredNumber);

}

const cube = function(){
    var number = readlineSync.question(chalk.yellowBright("Enter the number: "));
    var cubed = number * number * number;
    log("Cube of " + number + " => " + cubed);

}

module.exports = {
    menu,
    percentage,
    operations,
    start
}