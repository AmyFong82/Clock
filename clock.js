document.addEventListener('DOMContentLoaded', ()=>{

  function run(){
    const sec_hand = document.querySelector('#second-hand')
    const min_hand = document.querySelector('#minute-hand')
    const hour_hand = document.querySelector('#hour-hand')
    let now = new Date()
    let second = now.getSeconds()
    let minute = now.getMinutes()
    let hour = now.getHours()
    let sec_deg = second * 6
    let min_deg = minute * 6
    let hour_deg = hour * 6
    sec_hand.style.transform = "rotate(" + sec_deg + "deg)"
    min_hand.style.transform = "rotate(" + min_deg + "deg)"
    hour_hand.style.transform = 'rotate(' + hour_deg + "deg)"
  }

  
  run()
  setInterval(run, 1000)
})