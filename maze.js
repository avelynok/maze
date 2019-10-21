let map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];


function createMaze(grid) {
    let maze = document.createElement("div");
    maze.className = "maze";
    for (let row = 0; row < map.length; row++) {
        let rowEl = document.createElement("div");
        rowEl.className = "row";
        rowEl.id = "row" + row;
        let currentRow = grid[row];

        for (let cell = 0; cell < currentRow.length; cell++) {
            let cellEl = document.createElement("div");
            cellEl.className = "cell";
            cellEl.id = "row" + row + "cell" + cell;
            let text = document.createTextNode(currentRow[cell]);
            cellEl.appendChild(text);

            rowEl.appendChild(cellEl);
        }
        maze.appendChild(rowEl);
    }
    document.body.appendChild(maze);
}

createMaze(map);

let playerX = 0;
let playerY = 9;

function position(playerX, playerY) {
    let playerCoordinates = "row" + playerY + "cell" + playerX;
    let box = document.createElement("div");
    box.id = "box";
    document.getElementById(playerCoordinates).appendChild(box);
}
position(0, 9);


document.addEventListener("keydown", logKey);

function logKey(e) {
    if (e.code === "ArrowDown") {
        playerY += 1;

        playerCoordinates = "row" + playerY + "cell" + playerX;
        if (document.getElementById(playerCoordinates).innerText === "W") {
            playerY -= 1;
        }
    } else if (e.code === "ArrowUp") {
        playerY -= 1;

        playerCoordinates = "row" + playerY + "cell" + playerX;
        if (document.getElementById(playerCoordinates).innerText === "W") {
            playerY += 1;
        }
    } else if (e.code === "ArrowLeft") {
        playerX -= 1;

        playerCoordinates = "row" + playerY + "cell" + playerX;
        if (document.getElementById(playerCoordinates).innerText === "W") {
            playerX += 1;
        }
    } else if (e.code === "ArrowRight") {
        playerX += 1;

        playerCoordinates = "row" + playerY + "cell" + playerX;
        if (document.getElementById(playerCoordinates).innerText === "W") {
            playerX -= 1;
        }
    }
    playerCoordinates = "row" + playerY + "cell" + playerX;
    if (document.getElementById(playerCoordinates).innerText === "F") {
        let result = document.getElementById("result");
        let resultnode = document.createTextNode("Congrats, you made it out!!");
        result.appendChild(resultnode);
    }

    position(playerX, playerY);
}

function reset() {
    window.location.reload()
}