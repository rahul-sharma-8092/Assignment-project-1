const paragraph = document.getElementById('my-paragraph');

// Split the paragraph text into an array of words
const words = paragraph.textContent.split(' ');

// Loop through each word
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  
  // Check if the word is greater than 8 characters
  if (word.length > 8) {
    // Create a new span element with the highlighted word
    const span = document.createElement('span');
    span.textContent = word;
    span.style.backgroundColor = 'yellow';
    
    // Replace the word in the original text with the highlighted span element
    words[i] = span.outerHTML;
  }
}

// Join the array of words back into a string with the highlighted words
paragraph.innerHTML = words.join(' ');
