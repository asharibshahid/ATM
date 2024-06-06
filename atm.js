import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 661;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "ENTER YOUR PINCODE"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("your pincode is correct");
}
;
let operationAns = await inquirer.prompt([{
        name: "operation",
        type: "list",
        message: "SELECT A ONE OPTION",
        choices: ["withdraw", "CHECK BALANCE"]
    }]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: "ENTER THE AMOUNT"
        }]);
    myBalance -= amountAns.amount;
    console.log("your remaining balance is " + myBalance);
}
else if (operationAns.operation === "CHECK BALANCE") {
    console.log(`"your balance is ${myBalance}" `);
}
else if (10000 < operationAns.operation) {
    console.log("infucient balance ");
}
else {
    console.log("your pin is incorrect");
}
