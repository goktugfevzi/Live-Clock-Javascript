
let name = prompt('İsminiz nedir Beyefendi? ');
let info= document.querySelector('#myName')
info.innerHTML = `${name}`
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = today.getDay();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s +"      "+ days[d];
  setTimeout(showTime, 1000);
  
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
showTime()
