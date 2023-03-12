// Question 1 Reverse String:
function reverseString() {
    let input = prompt("Enter your string:"); // input string

    // function to reverse the input string
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    // delay function that calls the reverseString() function after 2 seconds
    function delayedReverse(str) {
        setTimeout(function() {
            let reversedStr = reverseString(str);
            console.log(reversedStr); // print the reversed string
            alert("Reversed String: " +reversedStr);
        }, 2000); // 2 seconds delay
    }

    delayedReverse(input); // call the delayedReverse() function with the input string

}

// Question 2 Random Number Generator with Delay and Progress Indication:
function randomNoGenerator() {
    let delayTime = 3000; // delay time in milliseconds
    let countdownTime = delayTime / 1000; // countdown time in seconds

    // function to generate a random number after a delay
    function generateRandomNumberWithDelay(delay) {
        return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let randomNumber = Math.floor(Math.random() * 100) + 1; // generate a random number between 1 and 100
            resolve(randomNumber); // resolve the promise with the generated random number
        }, delay);
        });
    }

    // function to display a countdown message every second until the random number is generated
    function displayCountdown() {
        let interval = setInterval(function() {
            countdownTime--;
            console.log("Generating random number in " + countdownTime + " seconds...");
            if (countdownTime === 0) {
            clearInterval(interval);
            }
        }, 1000);
    }

    // call the functions to generate a random number after a delay and display the countdown message
    displayCountdown();
    generateRandomNumberWithDelay(delayTime).then(function(result) {
        console.log("Random number generated: " + result); // print the generated random number
        alert("Random number generated: " + result);
    });

}

// Question 3 Build a feature for Store's Inventory:
function storeInventory() {
    
    let items = {
        "item1": 10,
        "item2": 20,
        "item3": 30,
        "item4": 40,
        "item5": 50
    };
      
    let exchangeRate = 80; // exchange rate of 1 USD to 80 INR
      
    // function to convert USD prices to INR prices using map higher-order function
    function convertToINR(items, exchangeRate) {
    return Object.fromEntries(Object.entries(items).map(([key, value]) => [key, value * exchangeRate]));
    }
      
    let itemsINR = convertToINR(items, exchangeRate); // call the function to convert USD prices to INR prices
      
    console.log(itemsINR); // print the object with the converted prices in INR
}

// Question 4 Filtering and Capitalizing: Books Published After 2010 with Author Names:
function filteringAndCapitalizingBooks() {
    
    function filterBooks(books) {
        const filteredBooks = [];
        for (let i = 0; i < books.length; i++) {
          if (books[i].year >= 2010) {
            const capitalizedAuthor = books[i].author.charAt(0).toUpperCase() + books[i].author.slice(1);
            filteredBooks.push({title: books[i].title, author: capitalizedAuthor, year: books[i].year});
          }
        }
        return filteredBooks;
    }
      
    const books = [
        {title: 'The Hunger Games', author: 'suzanne collins', year: 2008},
        {title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', year: 2005},
        {title: 'The Help', author: 'Kathryn Stockett', year: 2009},
        {title: 'The Martian', author: 'andy Weir', year: 2011},
    ];
      
    const filteredBooks = filterBooks(books);
    console.log(filteredBooks);
      
}

// Question 5 URL validation:
function urlVaidation() {
    
    const regex = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

    function validateURL(url) {
        if (regex.test(url)) {
            console.log(`"${url}" is a valid URL.`);
        } else {
            console.log(`"${url}" is not a valid URL.`);
        }
    }

    validateURL('http://www.example.com');
    validateURL('https://www.example.com/path/to/resource.html?query=string');
    validateURL('ftp://www.example.com');

}

// Question 6 LinkedIn Profile URL Validator:
function linkedInUrlvalidator() {
    
    const regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    function validateLinkedInProfileURL(url) {
        if (regex.test(url)) {
        console.log(`"${url}" is a valid LinkedIn profile URL.`);
        } else {
            console.log(`"${url}" is not a valid LinkedIn profile URL.`);
        }
    }

    validateLinkedInProfileURL('https://www.linkedin.com/in/john-doe_123');

    validateLinkedInProfileURL('https://www.linkedin.com/in/john-doe-123/');
    
    validateLinkedInProfileURL('https://www.linkedin.com/in/john-doe_123#about');

}