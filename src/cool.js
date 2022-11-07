const countToDate = new Date().setHours(new Date().getHours() + 24)
let previousTimeBetweenDates
setInterval(() => {
  
  const timeBetweenDates = 20
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
}, 300)

function flipAllCards(time) {
  const i = 1;
  const seconds = time;
 
  flip(document.querySelector("[umur]"), seconds)
  i++;   
}

function flip(flipCard) {
  if(flipCard==20){
    alert("da")
  }
  
  const topHalf = flipCard.querySelector(".top")
  // topHalf.classList.add('bg-teal-200')
  const startNumber = parseInt(topHalf.textContent)
  
  if (startNumber === 20) return
  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = startNumber + 1
  const startit = () => {
    setTimeout(function () {
      confetti.start();
    }, 200);
  };
  // Stops
  const stopit = () => {
    setTimeout(function () {
      confetti.stop();
    }, 5000);
  };
  // playing start
  
  if(startNumber === 19){
    startit();
    stopit();
  }
  
 
  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = startNumber + 1;
    a++;
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = startNumber + 1
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip);

  // // confetti
  // const tubuh = document.getElementsByTagName('body');
 

}


