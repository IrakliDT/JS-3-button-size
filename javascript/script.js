
const buttonEl = document.getElementById("Button")
let size = 0
let clickSZ = 1

function changeSize() {
        size += clickSZ
        buttonEl.style.fontSize = size + "em"

        if (size > 10 || size < 0) {
          clickSZ *= -1
        }
      }

 // click button to change size     
 buttonEl.addEventListener("click", changeSize)

 //automatically change size
 setInterval(changeSize, 300)