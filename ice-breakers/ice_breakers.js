const sentenceParts = {
    _questions: ['What', 'Where', 'How', 'Why'],
    _things: ['the world', 'a cat', 'Germany', 'USA', 'a dog', 'a house', 'a chair', 'the outer space', 'the sun', 'the moon', 'a life', 'the weather', 'your mum', 'a flower', 'a tree', 'the Santa Claus'],
    _verbs: ['exist','die','see','feel','grow','learn','move','work'],

    get questions() {
        return this._questions;
    },

    get things() {
        return this._things;
    },

    get verbs() {
        return this._verbs;
    }
}

// Function to create question type e.g. 'what is' or 'why does'
const addQuestion = () => {
    let question = sentenceParts.questions[Math.floor(Math.random() * 4)];
    if (question === 'What' || question === 'Where') {
        return question + ' is ';
    } else {
        return question + ' does ';
    }
}

// Adds the topic of conversation to the question
const addThing = () => {
    // adds a random variable from things list to the question part
    return addQuestion() + sentenceParts.things[Math.floor(Math.random() * sentenceParts.things.length)];
}

// Adds the verb if the question requires it (has a 'does' in it)
const addVerb = () => {
    const sentence = addThing();
    if (sentence.includes('does')) {
        return sentence + ' ' + sentenceParts.verbs[Math.floor(Math.random() * sentenceParts.verbs.length)] + '?';
    }
    return sentence + '?';
}

console.log(addVerb());
