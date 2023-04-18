const cards = document.querySelectorAll(".card")

console.log(cards)

cards.forEach(card => {
    card.addEventListener('click', handlemusic);
  });

  function handlemusic() {    
    let checkPlay = this.classList.contains("active")
    let audio = this.lastChild

    if(checkPlay) {        
        this.classList.remove("active")
        audio.pause()
        return
    }
    this.classList.add("active")
    audio.play()
  }



  let slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};


ScrollReveal({ reset: true });

let node = document.querySelector('#sobre');
let nodeList = document.querySelectorAll('.cards');
let nodeArray = [
    document.querySelector('#bang1'),
    document.querySelector('#bang2'),
    document.querySelector('#bang3'),
]

ScrollReveal().reveal(node)
ScrollReveal().reveal(nodeList)
ScrollReveal().reveal(nodeArray)