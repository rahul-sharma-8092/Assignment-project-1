// Question 1 Password Validator:
function passwordValidator(){
    const enterpassword = prompt("Enter Password"); 
    const confirmpassword = prompt("Enter Confirm Password");

    if(enterpassword === confirmpassword) {
        alert("Password Matched. Password validation Successful.");
        console.log("Password Matched. Password validation Successful.");
    } 
    else{
        alert("Password didn't match. Password validation unsuccessful to the consoleK");
        console.log("Password didn't match. Password validation unsuccessful to the console");
    }
}

// Question 2 Calculator:
function calculator(){
    let num1 = prompt("Enter 1st Number");
    let num2 = prompt("Enter 2nd Number");
    num1 = Number(num1);
    num2 = Number(num2);
    const operator = prompt("Choose an operator(+, -, *, /):");
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;
        
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            alert("Invalid operator");
            break;
    }
    console.log("Result = "+result);
    alert("Result = "+result);
}

// Question 3 Color Mixer:
function colorMixer(){
    const color1 = prompt("Enter color1: ");
    const color2 = prompt("Enter color2: ");

    switch (color1){
        case 'red':
            switch (color2){
                case 'blue':
                    console.log("purple");
                    alert("purple"); 
                    break;

                case 'yellow':
                    console.log("orange");  
                    alert("orange");  
                    break;

                default:
                    console.log("Invalid color combination");
                    alert("Invalid color combination");
                    break;
            }
        case 'blue':
            switch (color2){
                case 'red':
                    console.log("purple");
                    alert("purple"); 
                    break;

                case 'yellow':
                    console.log("green");  
                    alert("green");  
                    break;

                default:
                    console.log("Invalid color combination");
                    alert("Invalid color combination");
                    break;
            }
            break;
            case 'yellow':
                switch (color2){
                    case 'red':
                        console.log("orange");
                        alert("orange"); 
                        break;
                    default:
                        console.log("Invalid color combination");
                        alert("Invalid color combination");
                        break;
                }
                break;
        default:
            console.log("Invalid color combination");
            alert("Invalid color combination");
            break;
    }
}

// Question 4 Highest Marks
function highestMark(){
    let marks = [];
    for (let i = 0; i < 5; i++) {
        marks[i] = prompt("Enter marks:")
    }
    let highestMarks = marks[0];
    for (let index = 0; index < marks.length; index++) {
        highestMarks = marks[index] > highestMarks ? marks[index] : highestMarks;
    }
    console.log("Marks List: " +marks);
    console.log("Heighest Mark: " +highestMarks);
    alert("Marks List: " +marks);
    alert("Heighest Mark: " +highestMarks);
}

// Question 5 Capitalize
function capitalize(){
    let name = prompt("Please enter your name:");

    let formattedName = name.charAt(0).toUpperCase() + name.slice(1);

    console.log(formattedName);
    alert("Formatted Name: " +formattedName);
}

// Question 6 Vowel Counter
function vowelCounter(){
    let name2 = prompt("Please enter your name: ");
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for(let i = 0; i < name2.length; i++) {
        if(vowels.indexOf(name2[i]) !== -1) {
        vowelCount++;
        }
    }
    console.log("The number of vowels in your name is: " + vowelCount);
    alert("The number of vowels in your name is: " + vowelCount);

}

// Question 7 Remove Duplicates
function removeDuplicates() {

    let cart = ["item1", "item2", "item1", "item3", "item2"];
    alert("Cart item added by customer: " +cart);

    function removeDuplicates(cart) {
        let uniqueCart = [];
        for (let item of cart) {
          if (!uniqueCart.includes(item)) {
            uniqueCart.push(item);
          }
        }
        return uniqueCart;
    }
      
    let uniqueCart = removeDuplicates(cart);
    console.log(uniqueCart);
    alert("Modified Cart by function: " +uniqueCart);
      
}

// Question 8 Inverted right-angled triangle pattern with asterisks
function trianglePattern() {
    function printPattern(i) {
        for (let row = i; row >= 1; row--) {
            let pattern = "";
            for (let j = 1; j <= row; j++) {
                pattern += "*";
            }
            console.log(pattern);
        }
    }
      
    let i = 6;
    printPattern(i);
      
}

// Question 9 Check for divisibility
function checkForDivisiblity() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,15,21];

    let divisibleList = [];
    let j = 0;
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (num % 3 === 0 && num % 2 !== 0) {
            divisibleList[j] = num;
            j++;
            continue;
        }
    }
    console.log(divisibleList);
    alert(divisibleList);
}

// Question 10 Correct a bug
function correctBug() {
    
}

// Question 11 Unit converter
function unitConverter() {
    const celsius = prompt("Enter Celsius:");

    const fahrenheit = (celsius * 9/5) + 32;

    console.log(`${celsius}°C is ${fahrenheit}°F`);
    alert(`${celsius}°C is ${fahrenheit}°F`);
}

// Question 12 Calculate rental cost
function rentalCost() {
    const carType = prompt("Choose Car type( Economy, Midsize, Luxury ):");
    const numDays = prompt("Enter Number of Days:");

    function calculateRentalCost(numDays, carType) {
        let rentalCostPerDay;
        switch (carType) {
          case "Economy":
            rentalCostPerDay = 4000;
            break;
          case "Midsize":
            rentalCostPerDay = 10000;
            break;
          case "Luxury":
            rentalCostPerDay = 20000;
            break;
          default:
            console.log("Invalid car type");
        }
        return rentalCostPerDay * numDays;
      }

    const totalRentalCost = calculateRentalCost(numDays, carType);

    console.log("Rental Cost: " +totalRentalCost);
    alert("Rental Cost: " +totalRentalCost);
}

// Question 13 Bill splitter
function billSpliter() {
    const numPeople = prompt("Enter number of people:");
    let costPerDish = 0;

    // List of D ish price 
    const dishItemPrice = [20, 30, 50, 100, 25];

    // Adding total price of dish
    for (let i = 0; i < dishItemPrice.length; i++) {
        costPerDish += dishItemPrice[i];
    }

    // Function decleration for calculate totalBill or billPerPerson
    function calculateBill(costPerDish, numPeople) {
        const totalBill = costPerDish * numPeople;
        const billPerPerson = totalBill / numPeople;
        
        return {
          totalBill: totalBill,
          billPerPerson: billPerPerson
        };
      }

    // Calling of function
    const bill = calculateBill(costPerDish, numPeople);
    console.log(bill.totalBill);
    alert("Total Bill Amount: "+bill.totalBill);

    console.log(bill.billPerPerson);
    alert("Total amount of bill person: "+bill.billPerPerson);
}

// Question 14 Calculate the final order price
function theFinalOrderPrice() {
    const cartItems = [
        { unitPrice: 10, quantity: 2 },
        { unitPrice: 5, quantity: 3 },
        { unitPrice: 20, quantity: 4 }
      ];
    
      const calculateTotalCost = (cartItems) =>
      cartItems.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);    
      
      const totalCost = calculateTotalCost(cartItems);
      console.log(totalCost);
      alert("Total cost: "+totalCost);
}

// Question 15 Calculate the percentage of the discount
function calculatePercentageOfDiscount() {
    const calculateDiscountPercentage = (originalPrice, discountedPrice) =>
    ((originalPrice - discountedPrice) / originalPrice) * 100.0;

    const originalPrice = prompt("Enter Orginal price:");
    const discountedPrice = prompt("Enter Discounted price");

    const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
    console.log(discountPercentage.toFixed(2)+"%");
    alert("Discount percentage: " +discountPercentage.toFixed(2)+ "%");

}

// Question 16 Generate a random number
function generateRandomNumber() {
    
    const randomNumber = (() => {
        return Math.floor(Math.random() * 100) + 1;
    })();
      
    console.log(randomNumber);  
    alert("Random Number: "+randomNumber);  
}

// Question 17 Build a banking application
function bankingApplication() {
    
    // Create a customer object with name and balance keys
    const customer = {
        name: 'Rahul Sharma',
        balance: 1000,
    };
  
    // Function to deposit an amount into a customer's account
    function deposit(customer, amount) {
        customer.balance += amount;
        console.log(`Deposit of ${amount} successful. New balance is ${customer.balance}.`);
    }
  
    // Function to withdraw an amount from a customer's account
    function withdraw(customer, amount) {
        if (customer.balance < amount) {
        console.log(`Withdrawal of ${amount} failed. Insufficient balance.`);
        } else {
        customer.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance is ${customer.balance}.`);
        }
    }
  
    // Example 
    deposit(customer, 500); // Deposit of 500 successful. New balance is 1500.
    withdraw(customer, 200); // Withdrawal of 200 successful. New balance is 1300.
    withdraw(customer, 1500); // Withdrawal of 1500 failed. Insufficient balance.

    alert("Check Console");
}

// Question 20