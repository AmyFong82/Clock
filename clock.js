document.addEventListener('DOMContentLoaded', ()=>{

  function run(){
    const sec_hand = document.querySelector('#second-hand')
    let now = new Date()
    let second = now.getSeconds()
    let deg = second * 6
    sec_hand.style.transform = "rotate(" + deg + "deg)"
  }

  
  run()
  setInterval(run, 1000)
})