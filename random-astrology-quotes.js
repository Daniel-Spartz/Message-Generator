const messages1 = [
    "You have a great need for other people to like and admire you.",
    "You have a tendency to be critical of yourself.",
    "You have a great deal of unused capacity which you have not turned to your advantage.",
    "While you have some personality weaknesses, you are generally able to compensate for them."  
];

const messages2 = [
    "You have found it unwise to be too frank in revealing yourself to others.",
    "At times you are extroverted, affable, sociable, while at other times you are introverted, wary, reserved.",
    "Some of your aspirations tend to be pretty unrealistic.",
    "Security is one of your major goals in life."
];

const messages3 = [
    "Disciplined and self-controlled outside, you tend to be worrisome and insecure inside.",
    "At times you have serious doubts as to whether you have made the right decision or done the right thing.",
    "You prefer a certain amount of change and variety and become dissatisfied when hemmed in by restrictions and limitations.",
    "You pride yourself as an independent thinker and do not accept others' statements without satisfactory proof."
];

// creates random message from randomMessages array
const randomMessages = (array) => {
    let randIndex = Math.floor(Math.random() * array.length);
    for (let i=0; i < array.length; i++) {
        return array[randIndex];
    };
}

let finalRandomMessage = `${randomMessages(messages1)} ${randomMessages(messages2)} ${randomMessages(messages3)}`;

console.log(finalRandomMessage);