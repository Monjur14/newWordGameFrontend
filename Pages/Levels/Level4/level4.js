//Select DOM Elements
const screenFour = document.querySelector(".screen4");
const gameMainContainer2 = document.querySelector(".game_main_container2");
const winContainer3 = document.querySelector(".win_container3");
const resultContainer3 = document.querySelector(".result_screen3");
const resetBtn = document.querySelector(".reset_btn");
const playAgain = document.querySelector(".play_again");
const winMSG2 = document.querySelector(".win_msg2")
const loseMSG2 = document.querySelector(".lose_msg2")
const randomTextBoxLevelTwo = document.querySelector(".random_text_box_level2")
const screenThree = document.querySelector(".screen3")
const timeContainer = document.querySelector(".timer-container")
const timers = document.querySelector(".timer")
const timerElement = document.getElementById("timer");

//Global Variables
let countdown;
let apidata;
let randomThreeLetterWord = "";
let fillIndex = 0;
let filledInputs = [];
let level = 1;
win = null;
lose = 0;
let originalWord = "";
let timerCount = 2;

//Get the userTime
function startTimer() {
    let userTime = parseInt(localStorage.getItem('userTime')) || 0;
 
    const intervalId = setInterval(() => {
        userTime++; 
        localStorage.setItem('userTime', userTime); 
    }, 1000);

    return intervalId;
}

//Start The Game
setTimeout(() => {
    gameMainContainer2.classList.remove("hidden")
    getRandomFiveWord()
    startTimer()
}, 1000)

//Fetch Data 1
async function fetchData() {
    try {
        const response = await fetch("http://localhost:5000/random-word?length=6");
        const data = await response.json();
        apidata = [data.word];
        console.log(apidata)
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

//Timer Function
function timer() {
    let timeLeft = 30;
    countdown = setInterval(() => {
        setTimeout(() => {
            timeLeft--;
        }, 200)

        timerElement.textContent = timeLeft + "s";

        if (timeLeft === 0) {
            timerCount--;
            if(timerCount === 0){
                window.location.href = "/pages/levels/level1/level1.html"
            }
            clearInterval(countdown);
            randomTextBoxLevelTwo.innerText = ""
            getRandomFiveWord()
            timer()
        }
    }, 1000);
}
timer()

//Auto Check The User Input Value
function autoCheckValue() {
    const tempFilledWord = filledInputs.join('');
    filledWord = tempFilledWord.toLowerCase();

    if (filledInputs.length === 5) {
        setTimeout(() => {

            if (apidata[0].toLowerCase() === filledWord) {
                timerCount = 2
                clearInterval(countdown);
                fillInputDiv2()
                incrementCorrectScore();
                document.querySelector(".answer_box").classList.add("answer_box_correct")
                winMSG2.classList.remove("hidden")

                if (localStorage.getItem('correctScore')) {
                    clearInterval(startTimer());
                    setTimeout(() => {
                        let userTime = parseInt(localStorage.getItem('userTime'))
                        let msisdn = parseInt(localStorage.getItem('msisdn'));
                        let correctScore = parseInt(localStorage.getItem('correctScore'))
                        let incorrectScore = parseInt(localStorage.getItem('incorrectScore'))

                        console.log(userTime, msisdn, correctScore, incorrectScore)

                          
                        // fetch(`https://wordstar.shabox.mobi/ai/postscore?MSISDN=${msisdnValue}&Score=${userTime}`, requestOptions)
                        // .then(response => response.text())
                        // .then(result => console.log(result))
                        // .catch(error => console.log('error', error));
                    
                        timers.classList.add("hidden")
                        timeContainer.classList.add("hidden")
                        screenThree.classList.add("hidden")
                        resultContainer3.classList.add("flex")
                        resultContainer3.classList.remove("hidden")
                        winContainer3.classList.add("flex")
                        winContainer3.classList.remove("hidden")
                    }, 700)
                } else {
                    fetchData()
                    setTimeout(() => {
                        timer()
                        getRandomFiveWord()
                        winMSG2.classList.add("hidden")
                    }, 500)
                }
            } else {
                timerCount = 2
                clearInterval(countdown);
                fillInputDiv2()
                incrementIncorrectScore();
                document.querySelector(".answer_box").classList.add("answer_box_incorrect")
                loseMSG2.classList.remove("hidden")

                setTimeout(() => {
                    timer()
                    loseMSG2.classList.add("hidden")
                }, 500)
            }
        }, 1000)
    } else {
        return;
    }
}

// Function to increment the correct score
function incrementCorrectScore() {
    let correctScore = parseInt(localStorage.getItem('correctScore')) || 0;
    correctScore += 1;
    localStorage.setItem('correctScore', correctScore.toString());
}

// Function to increment the incorrect score
function incrementIncorrectScore() {
    let incorrectScore = parseInt(localStorage.getItem('incorrectScore')) || 0;
    incorrectScore += 1;
    localStorage.setItem('incorrectScore', incorrectScore.toString());
}

//Function For Getting Random Five Characters Word
function getRandomFiveWord() {
    const randomIndex = Math.floor(Math.random() * apidata.length);
    tempOriginalWord = apidata[0];
    originalWord = tempOriginalWord.toUpperCase();
    console.log(originalWord)

    let shuffledWord = shuffleWord(originalWord);

    console.log()

    while (shuffledWord === originalWord) {
        shuffledWord = shuffleWord(originalWord);
    }

    for (let i = 0; i < shuffledWord.length; i++) {
        setTimeout(() => {
            const input = document.createElement("input");
            input.type = "text";
            input.classList.add("randomInputBox", "animate__animated", i % 2 !== 0 ? "animate__fadeInDown" : "animate__fadeInUp");
            input.value = shuffledWord[i];
            input.maxLength = 1;
            input.readOnly = true;

            input.addEventListener("click", () => {
                fillBlankInput2(input.value);
                input.style.display = 'none';
            });

            input.addEventListener("click", () => {
                autoCheckValue();
            });

            randomTextBoxLevelTwo.appendChild(input);

        }, i * 100);
    }

    fillIndex = 0;
    filledInputs = [];
    fillInputDiv2();
}

function fillInputDiv2() {
    const giveInputs = document.querySelectorAll(".give_input2");
    for (let i = 0; i < giveInputs.length; i++) {
        giveInputs[i].value = '';
    }
}

function fillBlankInput2(letter) {
    const giveInputs = document.querySelectorAll(".give_input2");
    if (fillIndex < giveInputs.length) {
        giveInputs[fillIndex].value = letter;
        filledInputs[fillIndex] = letter;
        fillIndex++;
    }
}

function shuffleWord(word) {
    const wordArray = word.split('');
    for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join('');
}

//Reset Button
function reset_btn2() {
    clearInterval(countdown);
    randomTextBoxLevelTwo.innerText = ""
    fetch("http://localhost:5000/random-word?length=6")
        .then((res) => res.json())
        .then((data) => {
            apidata = [data.word]
            getRandomFiveWord()
            timer()
        })
}

//Play Again Button
playAgain.addEventListener("click", () => {
    window.location.href = "/pages/levels/level1/level1.html"
})

