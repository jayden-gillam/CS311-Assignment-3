const cards = document.querySelectorAll(".card")
let firstCard = null
let secondCard = null
let matchesLeft = 8

cards.forEach(card => {
    card.addEventListener("click", handleCardClick)
});

function handleCardClick(event) {
    const clickedCard = event.target
    clickedCard.innerHTML = clickedCard.dataset.value
    
    if (clickedCard === firstCard || clickedCard.classList.contains("clicked")) {
        return
    }

        clickedCard.innerHTML = clickedCard.dataset.value
        clickedCard.classList.add("clicked")

        if (!firstCard) {
            firstCard = clickedCard
        } else {
            secondCard = clickedCard
            checkForMatch()
        }
}

function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        setTimeout(() => {
            firstCard.classList.add("matched")
            secondCard.classList.add("matched")
            firstCard = null
            secondCard = null
            matchesLeft--
            document.getElementById("matches-left").innerHTML = "Matches left: " + matchesLeft
        }, 1000)
    } else {
        setTimeout(() => {
            firstCard.innerHTML = ""
            secondCard.innerHTML = ""
            firstCard.classList.remove("clicked")
            secondCard.classList.remove("clicked")
            firstCard = null
            secondCard = null
        }, 1000)
    }
}
