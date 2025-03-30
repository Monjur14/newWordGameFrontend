//Select DOM Elements
const screenThree = document.querySelector(".screen3");
const gameMainContainer2 = document.querySelector(".game_main_container2");
const resetBtn = document.querySelector(".reset_btn");
const winMSG2 = document.querySelector(".win_msg2")
const loseMSG2 = document.querySelector(".lose_msg2")
const randomTextBoxLevelTwo = document.querySelector(".random_text_box_level2")
const timerElement = document.getElementById("timer");

//Global Variables
let countdown;
let apidata;
let randomThreeLetterWord = "";
let fillIndex = 0;
let filledInputs = [];
win = null;
lose = 0;
let originalWord = "";
let timerCount = 2;

//Get The userTime From localStorage
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
    getRandomFourWord()
    startTimer()
}, 1000)

//Fetch Data 1
async function fetchData() {
    try {
        const response = await fetch("https://wordstar.shabox.mobi/ai/getwords?length=4");
        const data = await response.json();
        apidata = data;
        //console.log(apidata)
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

//Timer Function
function timer() {
    let timeLeft = 20;
    countdown = setInterval(() => {
        setTimeout(() => {
            timeLeft--;
        }, 200)

        timerElement.textContent = timeLeft + "s";

        if (timeLeft === 0) {
            timerCount--;
            if(timerCount === 0){
                window.location.href = "index.html"
            }
            clearInterval(countdown);
            randomTextBoxLevelTwo.innerText = ""
            getRandomFourWord()
            timer()
        }
    }, 1000);
}
timer()

//Auto Check The User Input Value
function autoCheckValue() {
    parseInt(localStorage.getItem('correctScore'), 10) || 0;
    const tempFilledWord = filledInputs.join('');
    filledWord = tempFilledWord.toLowerCase();
    let gameResult;
    fetch(`https://wordstar.shabox.mobi/ai/validate?word=${filledWord}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        gameResult = data;
    })
    .catch(error => {
        console.error("Fetch error:", error); 
    });

    if (filledInputs.length === 4) {
        setTimeout(() => {
            if (gameResult) {
                timerCount = 2
                clearInterval(countdown);
                fillInputDiv2()
                incrementCorrectScore();
                winMSG2.classList.remove("hidden")
                if (localStorage.getItem('correctScore') == 4) {
                    clearInterval(startTimer());
                    setTimeout(() => {
                        window.location.href = "./level3.html"
                    }, 700)
                } else {
                    fetchData()
                    setTimeout(() => {
                        timer()
                        getRandomFourWord()
                        winMSG2.classList.add("hidden")
                    }, 500)
                }
            } else {
                timerCount = 2
                clearInterval(countdown);
                fillInputDiv2()
                incrementIncorrectScore();
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
    Swal.fire({
        title: "Incorrect !",
        text: "Try Again",
        icon: "error",
        willOpen: () => {
            const swalContainer = document.querySelector('.swal2-container');
            swalContainer.style.zIndex = '99999999999';
        }
    }).then((result) => {
        if (result.isConfirmed) {
            getRandomFourWord();
        }
    });
    localStorage.setItem('incorrectScore', incorrectScore.toString());
}

//Function For Getting Random Four Characters Word
function getRandomFourWord() {
    const randomIndex = Math.floor(Math.random() * apidata.length);
    tempOriginalWord = apidata[0];
    originalWord = tempOriginalWord.toUpperCase();
    console.log(originalWord)

    let shuffledWord = shuffleWord(originalWord);

    while (shuffledWord === originalWord) {
        shuffledWord = shuffleWord(originalWord);
    }

    const transformations = [
        "rotate(-33deg) translate(50px) rotate(5deg)",
        "rotate(150deg) translate(50px) rotate(-180deg)",
        "rotate(240deg) translate(50px) rotate(-270deg)",
        "rotate(60deg) translate(50px) rotate(-90deg)"
    ];

    for (let i = 0; i < shuffledWord.length; i++) {
        setTimeout(() => {
            const input = document.createElement("input");
            input.type = "text";
            input.classList.add("letter", "randomInputBox");
            input.value = shuffledWord[i];
            input.maxLength = 1;
            input.readOnly = true;

            if (i < transformations.length) {
                input.style.transform = transformations[i];
            }

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
    fetch("https://wordstar.shabox.mobi/ai/getwords?length=4")
    .then((res) => res.json())
    .then((data) => {
            apidata = data
            getRandomFourWord()
            timer()
        })
}