let clock = document.querySelector('.clock');

  function time(){
  let date = new Date();
  let hours = date.getHours();
  let minuts = date.getMinutes();
  let seconds = date.getSeconds();
  
  if(hours < 10) hours = '0' + hours
  if(minuts < 10) minuts = '0' + minuts
  if(seconds < 10) seconds = '0' +seconds
  clock.innerHTML = hours + ':' + minuts + ':' + seconds;
  }

  setInterval(time, 1000);