const apiKey = "5477ca6aeef5411c9032cd17939f717b";
const game1Div = document.getElementById("game1Div");
const game2Div = document.getElementById("game2Div");
const game3Div = document.getElementById("game3Div");
const game4Div = document.getElementById("game4Div");
const game1Name = document.getElementById("game1Name");
const game2Name = document.getElementById("game2Name");
const game3Name = document.getElementById("game3Name");
const game4Name = document.getElementById("game4Name");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const unavailableImage = "https://mmlawf.com/wp-content/uploads/2020/11/unavailable-image.jpg"; 

var gamesContainer = document.getElementById("gamesContainer");

function randomIndexGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let gamesList = [];
let futureGamesList = [];

let gamesListPage1 = [];
let gamesListPage2 = [];
let gamesListPage3 = [];
let gamesListPage4 = [];

var index1;
var index2;
var index3;
var index4;

var xhr1 = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var xhr3 = new XMLHttpRequest();
var xhr4 = new XMLHttpRequest();

xhr1.open("GET", `https://api.rawg.io/api/games?key=${apiKey}&page=1&page_size=40&dates=2019-09-01,2019-09-30&platforms=18,1,7&`, true);
xhr2.open("GET", `https://api.rawg.io/api/games?key=${apiKey}&page=2&page_size=40&dates=2019-09-01,2019-09-30&platforms=18,1,7&`, true);
xhr3.open("GET", `https://api.rawg.io/api/games?key=${apiKey}&page=3&page_size=40&dates=2019-09-01,2019-09-30&platforms=18,1,7&`, true);
xhr4.open("GET", `https://api.rawg.io/api/games?key=${apiKey}&page=4&page_size=40&dates=2019-09-01,2019-09-30&platforms=18,1,7&`, true);

xhr1.onreadystatechange = function() {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
        var jsonResponse = JSON.parse(xhr1.responseText);
        if (gamesList.length === 0) {
            gamesList = jsonResponse.results;
        }
        else if (gamesList.length > 0 && jsonResponse) {
            gamesList = gamesList.concat(jsonResponse.results);
        }
        gamesListPage1 = jsonResponse.results;
    }
}

xhr2.onreadystatechange = function() {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
        var jsonResponse = JSON.parse(xhr2.responseText);
        if (gamesList.length === 0) {
            gamesList = jsonResponse.results;
        }
        else if (gamesList.length > 0 && jsonResponse.results) {
            gamesList = gamesList.concat(jsonResponse.results);
        }
        gamesListPage2 = jsonResponse.results;
    }
}

xhr3.onreadystatechange = function() {
    if (xhr3.readyState === 4 && xhr3.status === 200) {
        var jsonResponse = JSON.parse(xhr3.responseText);
        if (gamesList.length === 0) {
            gamesList = jsonResponse.results;
        }
        else if (gamesList.length > 0 && jsonResponse.results) {
            gamesList = gamesList.concat(jsonResponse.results);
        }
        gamesListPage3 = jsonResponse.results;
    }
}

xhr4.onreadystatechange = function() {
    if (xhr4.readyState === 4 && xhr4.status === 200) {
        var jsonResponse = JSON.parse(xhr4.responseText);
        if (gamesList.length === 0) {
            gamesList = jsonResponse.results;
        }
        else if (gamesList.length > 0 && jsonResponse.results) {
            gamesList = gamesList.concat(jsonResponse.results);
        }
        gamesListPage1 = jsonResponse.results;
    }
}

xhr1.send();
xhr2.send();
xhr3.send();
xhr4.send();

xhr1.onloadend = function() {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
        console.log("XHR1 completed. Games loaded:", gamesList.length);
        index1 = 0
        game1Div.style.backgroundImage = `url(${gamesList[index1].background_image || unavailableImage})`;
        game1Name.textContent = gamesList[index1].name;

        gamesListPage1.forEach(game => {
            var gameDiv = document.createElement("div");
            var gameTitle = document.createElement("h2");
            var actionsDiv = document.createElement("div");
            gameDiv.style.width = "300px";
            gameDiv.style.height = "300px";
            gameDiv.style.border = "2px solid white";
            gameDiv.style.borderRadius = "20px";
            gameDiv.style.backgroundSize = "cover";
            gameDiv.style.margin = "10px";
            gameDiv.style.display = "inline-block";
            gameDiv.style.backgroundImage = `url(${game.background_image || unavailableImage})`;
            gameDiv.style.backgroundPosition = "center";
            gameDiv.style.overflowX = "hidden";
            gameDiv.style.overflowY = "hidden";
            gameTitle.textContent = game.name;
            gameTitle.style.color = "red";
            gameTitle.style.textShadow = "2px 2px 4px #000000";
            actionsDiv.style.width = "100%";
            actionsDiv.style.height = "50px";
            actionsDiv.textContent = "Play In The Future";
            actionsDiv.style.fontSize = "25px";
            actionsDiv.style.textAlign = "center";
            actionsDiv.style.paddingTop = "15px";
            actionsDiv.style.color = "white";
            actionsDiv.style.position = "relative";
            actionsDiv.style.bottom = "0";
            actionsDiv.style.userSelect = "none";
            actionsDiv.style.backgroundColor = "black";
            gamesContainer.appendChild(gameDiv);
            gameDiv.appendChild(gameTitle);
            gameDiv.appendChild(actionsDiv);

            actionsDiv.addEventListener("click", function() {
                if (!futureGamesList.includes(game)) {
                    futureGamesList.push(game);
                    alert(game.name + " has been added to your Future Games list!")
                }
                else {
                    alert(game.name + " is already in your Future Games list!")
                }
            });
        });
    };
};

xhr2.onloadend = function() {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
        console.log("XHR2 completed. Games loaded:", gamesList.length);
        index2 = 1
        game2Div.style.backgroundImage = `url(${gamesList[index2].background_image || unavailableImage})`;
        game2Name.textContent = gamesList[index2].name;

        gamesListPage2.forEach(game => {
            var gameDiv = document.createElement("div");
            var gameTitle = document.createElement("h2");
            var actionsDiv = document.createElement("div");
            gameDiv.style.width = "300px";
            gameDiv.style.height = "300px";
            gameDiv.style.border = "2px solid white";
            gameDiv.style.borderRadius = "20px";
            gameDiv.style.backgroundSize = "cover";
            gameDiv.style.margin = "10px";
            gameDiv.style.display = "inline-block";
            gameDiv.style.backgroundImage = `url(${game.background_image || unavailableImage})`;
            gameDiv.style.backgroundPosition = "center";
            gameDiv.style.overflowX = "hidden";
            gameDiv.style.overflowY = "hidden";
            gameTitle.textContent = game.name;
            gameTitle.style.color = "red";
            gameTitle.style.textShadow = "2px 2px 4px #000000";
            actionsDiv.style.width = "100%";
            actionsDiv.style.height = "50px";
            actionsDiv.textContent = "Play In The Future";
            actionsDiv.style.fontSize = "25px";
            actionsDiv.style.textAlign = "center";
            actionsDiv.style.paddingTop = "15px";
            actionsDiv.style.color = "white";
            actionsDiv.style.position = "relative";
            actionsDiv.style.bottom = "0";
            actionsDiv.style.userSelect = "none";
            actionsDiv.style.backgroundColor = "black";
            gamesContainer.appendChild(gameDiv);
            gameDiv.appendChild(gameTitle);
            gameDiv.appendChild(actionsDiv);

            actionsDiv.addEventListener("click", function() {
                if (!futureGamesList.includes(game)) {
                    futureGamesList.push(game);
                    alert(game.name + " has been added to your Future Games list!")
                }
                else {
                    alert(game.name + " is already in your Future Games list!")
                }
            });
        });
    };
};

xhr3.onloadend = function() {
    if (xhr3.readyState === 4 && xhr3.status === 200) {
        console.log("XHR3 completed. Games loaded:", gamesList.length);
        index3 = 2
        game3Div.style.backgroundImage = `url(${gamesList[index3].background_image || unavailableImage})`;
        game3Name.textContent = gamesList[index3].name;

        gamesListPage3.forEach(game => {
            var gameDiv = document.createElement("div");
            var gameTitle = document.createElement("h2");
            var actionsDiv = document.createElement("div");
            gameDiv.style.width = "300px";
            gameDiv.style.height = "300px";
            gameDiv.style.border = "2px solid white";
            gameDiv.style.borderRadius = "20px";
            gameDiv.style.backgroundSize = "cover";
            gameDiv.style.margin = "10px";
            gameDiv.style.display = "inline-block";
            gameDiv.style.backgroundImage = `url(${game.background_image || unavailableImage})`;
            gameDiv.style.backgroundPosition = "center";
            gameDiv.style.overflowX = "hidden";
            gameDiv.style.overflowY = "hidden";
            gameTitle.textContent = game.name;
            gameTitle.style.color = "red";
            gameTitle.style.textShadow = "2px 2px 4px #000000";
            actionsDiv.style.width = "100%";
            actionsDiv.style.height = "50px";
            actionsDiv.textContent = "Play In The Future";
            actionsDiv.style.fontSize = "25px";
            actionsDiv.style.textAlign = "center";
            actionsDiv.style.paddingTop = "15px";
            actionsDiv.style.color = "white";
            actionsDiv.style.position = "relative";
            actionsDiv.style.bottom = "0";
            actionsDiv.style.userSelect = "none";
            actionsDiv.style.backgroundColor = "black";
            gamesContainer.appendChild(gameDiv);
            gameDiv.appendChild(gameTitle);
            gameDiv.appendChild(actionsDiv);

            actionsDiv.addEventListener("click", function() {
                if (!futureGamesList.includes(game)) {
                    futureGamesList.push(game);
                    alert(game.name + " has been added to your Future Games list!")
                }
                else {
                    alert(game.name + " is already in your Future Games list!")
                }
            });
        });
    };
};

xhr4.onloadend = function() {
    if (xhr4.readyState === 4 && xhr4.status === 200) {
        console.log("XHR4 completed. Games loaded:", gamesList.length);
        index4 = 3
        game4Div.style.backgroundImage = `url(${gamesList[index4].background_image || unavailableImage})`;
        game4Name.textContent = gamesList[index4].name;

        gamesListPage4.forEach(game => {
            var gameDiv = document.createElement("div");
            var gameTitle = document.createElement("h2");
            var actionsDiv = document.createElement("div");
            gameDiv.style.width = "300px";
            gameDiv.style.height = "300px";
            gameDiv.style.border = "2px solid white";
            gameDiv.style.borderRadius = "20px";
            gameDiv.style.backgroundSize = "cover";
            gameDiv.style.margin = "10px";
            gameDiv.style.display = "inline-block";
            gameDiv.style.backgroundImage = `url(${game.background_image || unavailableImage})`;
            gameDiv.style.backgroundPosition = "center";
            gameDiv.style.overflowX = "hidden";
            gameDiv.style.overflowY = "hidden";
            gameTitle.textContent = game.name;
            gameTitle.style.color = "red";
            gameTitle.style.textShadow = "2px 2px 4px #000000";
            actionsDiv.style.width = "100%";
            actionsDiv.style.visibility = "hidden";
            actionsDiv.style.height = "50px";
            actionsDiv.textContent = "Play In The Future";
            actionsDiv.style.fontSize = "25px";
            actionsDiv.style.textAlign = "center";
            actionsDiv.style.paddingTop = "15px";
            actionsDiv.style.color = "white";
            actionsDiv.style.position = "relative";
            actionsDiv.style.bottom = "0";
            actionsDiv.style.userSelect = "none";
            actionsDiv.style.backgroundColor = "black";
            gamesContainer.appendChild(gameDiv);
            gameDiv.appendChild(gameTitle);
            gameDiv.appendChild(actionsDiv);

            actionsDiv.addEventListener("click", function() {
                if (!futureGamesList.includes(game)) {
                    futureGamesList.push(game);
                    alert(game.name + " has been added to your Future Games list!")
                }
                else {
                    alert(game.name + " is already in your Future Games list!")
                }
            });
        });
    };
};

nextButton.addEventListener("click", function() {
    if (index4+4 >= gamesList.length) {
        index1 = 0;
        index2 = 1;
        index3 = 2;
        index4 = 3
    }
    else {
        index1 += 4;
        index2 += 4;
        index3 += 4;
        index4 += 4;
    }

    game1Div.style.backgroundImage = `url(${gamesList[index1].background_image || unavailableImage})`;
    game2Div.style.backgroundImage = `url(${gamesList[index2].background_image || unavailableImage})`;
    game3Div.style.backgroundImage = `url(${gamesList[index3].background_image || unavailableImage})`;
    game4Div.style.backgroundImage = `url(${gamesList[index4].background_image || unavailableImage})`;

    game1Name.textContent = gamesList[index1].name;
    game2Name.textContent = gamesList[index2].name;
    game3Name.textContent = gamesList[index3].name;
    game4Name.textContent = gamesList[index4].name;

    console.log(index1, index4)
});

previousButton.addEventListener("click", function() {
    if (index1 - 4 <= 0) {
        index1 = gamesList.length - 3
        index2 = gamesList.length - 2
        index3 = gamesList.length - 1
        index4 = gamesList.length
    }
    else if (index1 - 4 > 0) {
        index1 -= 4
        index2 -= 4
        index3 -= 4
        index4 -= 4
    }
    game1Div.style.backgroundImage = `url(${gamesList[index1].background_image || unavailableImage})`;
    game2Div.style.backgroundImage = `url(${gamesList[index2].background_image || unavailableImage})`;
    game3Div.style.backgroundImage = `url(${gamesList[index3].background_image || unavailableImage})`;
    game4Div.style.backgroundImage = `url(${gamesList[index4].background_image || unavailableImage})`;

    game1Name.textContent = gamesList[index1].name;
    game2Name.textContent = gamesList[index2].name;
    game3Name.textContent = gamesList[index3].name;
    game4Name.textContent = gamesList[index4].name;

    console.log(index1, index4)
});

// https://api.rawg.io/api/games?key=a164ea11fd1342a4a07f2c468d7dfe2c&dates=2019-09-01,2019-09-30&platforms=18,1,7