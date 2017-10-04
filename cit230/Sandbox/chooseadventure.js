var instructions = [
    {
        "id": 1,
        "choices": {
            "first": 2,
            "second": 3
        },
        "choiceText": "choose 1",
        "title": "The Adventure Begins",
        "description": "This is where you setup your initial story",
        "ending": false
},
    {
        "id": 2,
        "choices": {
            "first": 4,
            "second": 5
        },
        "choiceText": "Go Left",
        "title": "The long hallway",
        "description": "Describe the current setting",
        "ending": true
},
    {
        "id": 3,
        "choices": {
            "first": 6,
            "second": 7
        },
        "choiceText": "Go Right",
        "title": "The hungry beast",
        "description": "This is probably not going to end well.",
        "ending": true
}];





//updates the screen to show the current description and choices
//requires the id of the new set of instructions
function nextStep(id) {
    //first we need to get the new item from the list of instructions
    var instruction = getItem(instructions, id);
    console.log(instruction);
    //then we need to update the screen with the main description
    updateElement('title', instruction.title);
    updateElement('description', instruction.description);

    //then get the items for choice1 and 2 from the list
    var choice1 = getItem(instructions, instruction.choices.first);
    var choice2 = getItem(instructions, instruction.choices.second);
    console.log(choice1);
    //check to see if they are endpoints
    //if endpoints then end the game
    //if not update those sections on the screen with the choiceText

    while (instruction.ending == true && instruction.id === 2){
        window.alert("You won!");
        break
    }

    while (instruction.ending == true && instruction.id === 3){
        window.alert("You died...");
        break
    }

        updateElement('choiceOne', choice1.choiceText);
        updateElement('choiceTwo', choice2.choiceText);
        updateButton('buttonOne', choice1.id);
        updateButton('buttonTwo', choice2.id);
}

//1. create the getItem, updateElement, and updateButton functions

//getItem: gets an item from a list by id
//requires the list and id of the desired element

function getItem(instructions, id){
    var max = instructions.length;
    for(var i=0; i < max; i++){
        if(instructions[i].id == id){
            return instructions[i];
        }
        else{
        }
    }
}
//updateElement: updates the contents of an element on the screen
//requires the id of the div to update, and the new contents.
function updateElement(title,instruction){
    document.getElementById(title).innerHTML= instruction;
}
//updateButton: sets the onclick event for a button with the id of the item it chooses
function updateButton(buttonId, choiceId){
    var button = document.getElementById(buttonId);
    button.setAttribute("onclick", "nextStep(" + choiceId + ")");
}
//2. then create and use a function to initialize the game to step 1
nextStep(1);
//3. other needed functions
//restart: resets the game back to the beginning.
function reset(){
    window.location.reload(true);
}
//happy ending: does whatever we want it to do when they end in a good place

//sad ending: does whatever we want it to do if they end at a bad place

//Group Members: Kaden Ashcraft; Myself(Blaine Akers)
