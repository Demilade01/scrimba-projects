let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let scoreHome = 0
let guestHome = 0

function addOneHome() {
    scoreHome += 1
    homeScore.innerText = scoreHome
}
function addTwoHome() {
    scoreHome += 2
    homeScore.innerText = scoreHome
}
function addThreeHome() {
    scoreHome += 3
    homeScore.innerText = scoreHome
}

function addOneGuest() {
    guestHome += 1
    guestScore.innerText = guestHome
}

function addTwoGuest() {
    guestHome += 2
    guestScore.innerText = guestHome
}

function addThreeGuest() {
    guestHome += 3
    guestScore.innerText = guestHome
}