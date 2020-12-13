//index.js

//waits for index to load before starting
//When enter is press

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
        if (e.code === "Enter") {
            let input = inputField.value;
            console.log(`I typed '${input}'`)
        }
    });
});

//chat function
function addChat(input, product) {
    const mainDiv = document.getElementById("main");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    speak(product);
}

//replaces void characters incase 
function charactersEntered() {

    //remove all characters except word characters, space, and digits
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");
}

const trigger = [
    //0 
    ["Goodbye", "hey", "hello", "hi"],
    //1
    ["thanks", "thank you"],
    //2
    ["bye", "good bye", "goodbye"],
    //3
    ["restaurant", "gym", "life style", "hotel"]
];

const reply = [
    //0 
    ["Hi", "Hello", "hi there", "hey",],
    //1
    ["you are welcome!", "no problem, bye for now!"],
    //2
    ["Goodbye", "See you later", "see you soon"],
    //3
    ["restaurant", "gym", "life style", "hotel"]
];

const alternative = [
    "I am sorry, but i do not understand that input, it has been added to our database and an answer will be implemented soon, meanwhile try one of this: Restaurant, Fitness, out doors or hotel"
];


//array to find a reply
function compare(triggerArray, replyArray, text) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == text) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    return item;
}

//Reply function
function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");

    //compare arrays
    //search keyword
    //random alternative

    if (compare(trigger, reply, text)) {
        product = compare(trigger, reply, text);
    } else if (text.match(/robot/gi)) {
        product = robot[Math.floor(Math.random() * robot.length)];
    } else {
        product = alternative[Math.floor(Math.random() * alternative.length)];


        $.ajax({
            url: '../insertData.php',
            type: 'post',
            data: { input: input },
            async: false,
            success: function (data) {
                // this is where our page will be updated to inform us that everything is fine....
                //from the insertData page we are expecting "success" when things are good or "problems"when are bad
                if (data == "success") {
                    //manipulate the DOM based on the decision.
                    console.log(`I typed '${input}'`);
                }

            },
            cache: false
        });

    }//end else

    addChat(input, product);
}

