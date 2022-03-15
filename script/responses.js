function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hello" || input == "Hi") {
        return "Hello there!";
    } else if (input == "Goodbye") {
        return "Talk to you later!";
    } else if (input == "How are you doing") {
        return "Awesome! what about you";
    } else if (input == "Thank you" || input == "Thanks") {
        return "You are welcome dear";
    } 
    else {
        return "Try asking something else!";
    }
}