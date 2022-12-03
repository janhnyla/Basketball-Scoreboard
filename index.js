let scoreTallHome = document.getElementById("scoretall-home")
let scoreTallGuest = document.getElementById("scoretall-guest")
let homeCount = 0
let guestCount = 0
let hvemLeder = document.getElementById("leder")

function home1() {
    homeCount += 1
    scoreTallHome.textContent = homeCount
            if (homeCount > guestCount) {
            hvemLeder.textContent = "Home team is leading!";
            }
            else if (homeCount < guestCount) {
            hvemLeder.textContent = "Guest team is leading!";
            }
            else {
                hvemLeder.textContent = "The teams are equal!";
            }   
}

function home2() {
    homeCount += 2
    scoreTallHome.textContent = homeCount  
                if (homeCount > guestCount) {
                hvemLeder.textContent = "Home team is leading!";
                }
                else if (homeCount < guestCount) {
                hvemLeder.textContent = "Guest team is leading!";
                }
                else {
                    hvemLeder.textContent = "The teams are equal!";
                }   
}

function home3() {
    homeCount += 3
    scoreTallHome.textContent = homeCount  
                if (homeCount > guestCount) {
                hvemLeder.textContent = "Home team is leading!";
                }
                else if (homeCount < guestCount) {
                hvemLeder.textContent = "Guest team is leading!";
                }
                else {
                    hvemLeder.textContent = "The teams are equal!";
                }   
}

function guest1() {
    guestCount += 1
    scoreTallGuest.textContent = guestCount  
                if (homeCount > guestCount) {
                hvemLeder.textContent = "Home team is leading!";
                }
                else if (homeCount < guestCount) {
                hvemLeder.textContent = "Guest team is leading!";
                }
                else {
                    hvemLeder.textContent = "The teams are equal!";
                }   
}

function guest2() {
    guestCount += 2
    scoreTallGuest.textContent = guestCount    
                if (homeCount > guestCount) {
                hvemLeder.textContent = "Home team is leading!";
                }
                else if (homeCount < guestCount) {
                hvemLeder.textContent = "Guest team is leading!";
                }
                else {
                    hvemLeder.textContent = "The teams are equal!";
                } 
}

function guest3() {
    guestCount += 3
    scoreTallGuest.textContent = guestCount    
                if (homeCount > guestCount) {
                hvemLeder.textContent = "Home team is leading!";
                }
                else if (homeCount < guestCount) {
                hvemLeder.textContent = "Guest team is leading!";
                }
                else {
                    hvemLeder.textContent = "The teams are equal!";
                } 
}



function newgame() {
    scoreTallHome.textContent = 0
    scoreTallGuest.textContent = 0
    homeCount = 0
    guestCount = 0
}

