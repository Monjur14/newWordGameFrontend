//Select DOM Elements
const screenOne = document.querySelector(".screen1");
const screenTwo = document.querySelector(".screen2");
const playButton = document.querySelector(".play_button");
const gameMainContainer = document.querySelector(".game_main_container");
const resetBtn = document.querySelector(".reset_btn");
const winMSG = document.querySelector(".win_msg");
const loseMSG = document.querySelector(".lose_msg");
const timerElement = document.getElementById("timer");

//Global Variables
let countdown;
let apidata;
let randomThreeLetterWord = "";
let fillIndex = 0;
let filledInputs = [];
let originalWord = "";
win = null;
lose = 0;
let timerCount = 2;
const urlParams = new URLSearchParams(window.location.search);
let resetBtnCount = 1;

//LocalStorage Value
localStorage.setItem('correctScore', '0');
localStorage.setItem('incorrectScore', '0');
localStorage.setItem('userTime', '0');

// Set the Number in Session Storage
if (urlParams.has("msisdn")) {
    const msisdnValue = urlParams.get("msisdn");
    sessionStorage.setItem("msisdn", msisdnValue);
}

//Set the Timing Count Functionality
function startTimer() {
    let userTime = 0;
    const intervalId = setInterval(() => {
        userTime++;
        localStorage.setItem('userTime', userTime);
    }, 1000);
    return intervalId;
}

//Set the Timer
function timer() {
    let timeLeft = 15;
    countdown = setInterval(() => {
        setTimeout(() => {
            timeLeft--;
        }, 200)

        timerElement.textContent = timeLeft + "s";

        if (timeLeft === 0) {
            timerCount--;
            if (timerCount === 0) {
                window.location.href = "/pages/levels/level1/level1.html"
            }
            fetchData2()
            clearInterval(countdown);
            timer()
        }
    }, 1000);
}

//Fetch Data 1
async function fetchData() {
    if(resetBtnCount === 1) {
        fetchData2();
        resetBtnCount++;
    }
    try {
        const response = await fetch("http://localhost:5000/random-word?length=3");
        const data = await response.json();
        console.log("Date", data);
        // apidata = ["কলম"];
        apidata = [data.word];
        console.log(apidata);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

//Fetch Data 2
async function fetchData2() {
    try {
        const response = await fetch("http://localhost:5000/random-word?length=3");
        const data = await response.json();
        console.log("Date", data);
        // apidata = ["কলম"];
        apidata = [data.word];
        getRandomThreeWord()
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

//Auto Check The User Input Value
function autoCheckValue() {
    const tempFilledWord = filledInputs.join('');
    filledWord = tempFilledWord.toLowerCase();
    console.log("Filled Word", filledWord);
    if (filledInputs.length === 3) {
        setTimeout(() => {
            if (apidata[0].toLowerCase() === filledWord) {
                timerCount = 2;
                clearInterval(countdown);
                fillInputDiv()
                incrementCorrectScore() 
                win = localStorage.getItem('correctScore');
                winMSG.classList.remove("hidden")
                if (win == 1) {
                    clearInterval(startTimer());
                    setTimeout(() => {
                        window.location.href = "./level2.html"
                    }, 700)
                } else {
                    fetchData()
                    setTimeout(() => {
                        timer()
                        getRandomThreeWord()
                        winMSG.classList.add("hidden")
                    }, 500)
                }
            } else {
                timerCount = 2;
                clearInterval(countdown);
                fillInputDiv()
                incrementIncorrectScore()
                lose = localStorage.getItem('incorrectScore');
                loseMSG.classList.remove("hidden")
                setTimeout(() => {
                    timer()
                    loseMSG.classList.add("hidden")
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
    Swal.fire({
        title: "Incorrect !",
        text: "Try Again",
        icon: "error",
        willOpen: () => {
            const swalContainer = document.querySelector('.swal2-container');
            swalContainer.style.zIndex = '99999999999';
        }
    }).then((result) => {
        // Check if the OK button was clicked
        if (result.isConfirmed) {
            getRandomThreeWord();
        }
    });
    localStorage.setItem('incorrectScore', incorrectScore.toString());
}

//Function For Getting Random Three Characters Word
function getRandomThreeWord() {
    const randomTextBox1 = document.querySelector(".random_text_box1");
    randomTextBox1.innerHTML = ""
    // console.log("Random Text Box", apidata);
    const randomIndex = Math.floor(Math.random() * apidata.length);
    tempOriginalWord = apidata[0];
    originalWord = tempOriginalWord.toUpperCase();
    console.log(originalWord)
    let shuffledWord = shuffleWord(originalWord);

    while (shuffledWord === originalWord) {
        shuffledWord = shuffleWord(originalWord);
    }

    for (let i = 0; i < shuffledWord.length; i++) {
        setTimeout(() => {
            const input = document.createElement("input");
            input.type = "text";
            //input.classList.add("letter", "randomInputBox");
            input.classList.add("randomInputBox", "animate__animated", i % 2 !== 0 ? "animate__fadeInDown" : "animate__fadeInUp");
            input.value = shuffledWord[i];
            input.maxLength = 1;
            input.readOnly = true;

            input.addEventListener("click", () => {
                fillBlankInput(input.value);
                input.style.display = 'none';
            });

            input.addEventListener("click", () => {
                autoCheckValue();
            });

            randomTextBox1.appendChild(input);

        }, i * 100);
    }

    fillIndex = 0;
    filledInputs = [];
    fillInputDiv();
}

function fillInputDiv() {
    const giveInputs = document.querySelectorAll(".give_input");
    for (let i = 0; i < giveInputs.length; i++) {
        giveInputs[i].value = '';
    }
}

function fillBlankInput(letter) {
    const giveInputs = document.querySelectorAll(".give_input");
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

//Play Button For Start The Game
playButton.addEventListener("click", () => {
    screenOne.classList.remove("flex");
    screenOne.classList.add("hidden");
    screenTwo.classList.remove("hidden");
    getRandomThreeWord();
    setTimeout(() => {
        gameMainContainer.classList.remove("hidden");
    }, 1200);
    setTimeout(() => {
        timerElement.classList.remove("hidden")
        timerElement.classList.remove("flex")
        timer()
        startTimer();
    }, 1700)
});

//Reset Button
resetBtn.addEventListener("click", () => {
    fetchData()
    getRandomThreeWord();
    clearInterval(countdown);
    timer()
});
