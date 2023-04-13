let Sentence = "India officially the Republic of India is a country in South Asia It is the seventh largest country by area and the second most populour country";

function wordCount(text){

    text = text.toLowerCase();

    const words = text.split(' ');

    const wordCounts = new Object();

    for(let i = 0; i < words.length; i++){
        const word = words[i];

        if (!wordCounts[word]) {
            wordCounts[word] = 1;
            
        } else {
            wordCounts[word]++;
        }
    }
    return wordCounts;
}

const NoOfWords = wordCount(Sentence);
console.log(NoOfWords);