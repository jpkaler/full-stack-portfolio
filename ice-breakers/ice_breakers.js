const sentenceParts = {
    _questions: ['What', 'Where', 'How', 'Why'],
    _things: ['the world', 'a cat', 'Germany', 'USA', 'a dog', 'a house', 'a chair', 'the outer space', 'the sun', 'the moon', 'a life', 'the weather', 'your mum', 'a flower', 'a tree', 'the Santa Claus'],
    _verbs: [],

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

// Function to create question type eg. 'what is' or 'why does'
const createQuestion = () => {
    let question = sentenceParts.questions[Math.floor(Math.random() * 4)];
    if (question === 'What' || question === 'Where') {
        return question += ' is ';
    } else {
        return question += ' does ';
    }
}

// Adds the topic of conversation to the question
const addThing = (question) => {

}