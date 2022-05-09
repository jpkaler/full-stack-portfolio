const questions = ['What', 'Where', 'How', 'Why'];
const things = [];
const verbs = [];

// Function to create question type eg. 'what is' or 'where does'
const createQuestion = () => {
    let question = questions[Math.floor(Math.random() * 4)];


    return question;
}