//  button sizing
const buttonEl = document.getElementById("Button")
let index = 1
let clickSZ = 1

function changeSize() {
  index += clickSZ
        buttonEl.style.fontSize = index + "em"

        if (index > 10 || index < 0) {
          clickSZ *= -1
        }
        setTimeout(changeSize, 500)
      }
    
 buttonEl.addEventListener("click", changeSize)


 // music
 let play = document.getElementById("Button");
     function playMusic() {
      let audio = new Audio("music/DavidGuetta.mp3");
      audio.play();
    }
 
 Button.addEventListener("click", playMusic)   


