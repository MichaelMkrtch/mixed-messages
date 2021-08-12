const messages = [
    'That has sort of an oak-y afterbirth.',
    'I...Declare...BANKRUPTCY!',
    'It\s Britney bitch.', 
    'Where are the turtles?!', 
    'The worst thing about prison was the dementors.', 
    'That\s what she said!'
];


let lastNum = [];
const output = [];

const getMessages = () => {
    const randIndex = Math.floor(Math.random() * messages.length);
    if (!lastNum.includes(randIndex)) {
        output.push(messages[randIndex]);
        lastNum.push(randIndex);
    } else {
        getMessages();
    }
};

for (let i = 0; i < 3; i++) {
    getMessages();
};

console.log(output.join(' '));