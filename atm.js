import inquirer from "inquirer";
let myBalance = 10000;
const myPin = 661;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "ENTER YOUR PINCODE"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("your pincode is correct");
}
else {
    console.log("your pin is incorrect");
}
let now = await inquirer.prompt([
    {
        name: "new",
        type: "list",
        message: "choosee your account",
        choices: [
            "current account",
            "Saving account"
        ]
    },
    {
        name: "operation",
        type: "list",
        message: "SELECT A ONE OPTION",
        choices: ["withdraw", "Fast Cash"]
    }
]);
if (now.operation === "withdraw") {
    let amountAns = await inquirer.prompt([{
            name: "withdraw",
            type: "number",
            message: "ENTER THE AMOUNT"
        }]);
    if (myBalance >= amountAns.withdraw) {
        myBalance -= amountAns.withdraw;
        console.log("your remaining balance is " + myBalance);
    }
    else
        (console.log("insuficient balance"));
}
else {
    let Fastcash = await inquirer.prompt([
        {
            name: "FastAmount",
            type: "list",
            message: "Select the amount you want to withdraw",
            choices: [
                "1000",
                "3000",
                "5000"
            ]
        }
    ]);
    if (myBalance >= Fastcash.FastAmount) {
        myBalance -= Fastcash.FastAmount;
        console.log("Your remaining balance is " + myBalance);
    }
    else
        (console.log("insuficient balance"));
}
