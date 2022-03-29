let firstcard = getrandomnumber()
let secondcard = getrandomnumber()
let cards = [firstcard,secondcard] //array
let sum = firstcard + secondcard
let hasbalckjack = false
let isAlive = false
let message = ""


function getrandomnumber() {

    let randomnumber =  Math.floor(Math.random()*13)+1

    if(randomnumber > 10){
        return 10
    }else if(randomnumber === 1){
        return 11
    } else{
        return randomnumber
    }
}

function startgame(){
    isAlive = true

    let firstcard = getrandomnumber()
    let secondcard = getrandomnumber()
    cards = [firstcard,secondcard] //array
    sum = firstcard + secondcard
    rendergame()
}

function rendergame(){

    document.getElementById("cards").textContent = "cards: "
    //document.getElementById("cards").textContent = "cards: "+ cards[0] + " "+ cards[1]

    for(let i =0; i<cards.length; i+=1){
        document.getElementById("cards").textContent += cards[i] + " "
    }

    document.getElementById("sum").textContent = "sum: "+sum
    if(sum<21){
        message = "Do you want to draw a new card??"
    }else if(sum === 21){
        message = "wohoo!! you have won a blackjack!!"
        hasbalckjack = true
    }else{
        message = "you are out of game"
        isAlive = false
    }

    document.getElementById("message").textContent = message
    //console.log(message)
}
function newcard(){
    //console.log("drawing new card")
    if(isAlive ===true && hasbalckjack ===false){
        let newcard = getrandomnumber()
        sum+= newcard
        cards.push(newcard)
        document.getElementById("sum").textContent = "sum: "+sum
        rendergame()
    }
}