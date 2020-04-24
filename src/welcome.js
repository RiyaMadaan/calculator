const {
    log,
    tab,
    chalk,
    clear
} = require("./util.js");

const welcomeScreen = function () {
    clear();
    const leftgap = tab + tab + "\t";
    const topBlockBorder = leftgap + "-".repeat(21);
    const calcBoardBorder = leftgap + "+---".repeat(5) + "+\n";
    const calcBoardLine1 = leftgap + "| 7 | 8 | 9 | / |   |";
    const calcBoardLine2 = leftgap + "| 4 | 5 | 6 | * |   |";
    const calcBoardLine3 = leftgap + "| 1 | 2 | 3 | - |x^3|";
    const calcBoardLine4 = leftgap + "| 0 | . | = | + |x^2|";
    const message1 = tab + tab + "welcome to the most amazing calculator!\n";
    const message2 = leftgap + "   ~~~~~~~~~~~~~~~\n"
    const message3 = tab + tab + " hope your experience would be best:)"
    const welcomeMessage = chalk.blueBright((message1 + message2 + message3).toUpperCase());
    log(topBlockBorder);
    log(leftgap + "|\t\t 000|")
    log(topBlockBorder);
    log(calcBoardBorder + calcBoardLine1);
    log(calcBoardBorder + calcBoardLine2);
    log(calcBoardBorder + calcBoardLine3);
    log(calcBoardBorder + calcBoardLine4);
    log(calcBoardBorder);
    log(welcomeMessage);
}

module.exports = {
    welcomeScreen,
    log,
    tab,
    chalk,
    clear
}