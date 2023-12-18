const timer =  document.querySelector('.time');
let sec = 0;
let para = document.createElement('p');
para.textContent = `The time is seconds is :${sec}`;
timer.append(para);
const showTime = setInterval(()=>{
  sec++;
  para.textContent = `The time is seconds is :${sec}`;
  if(sec>=20){
    clearInterval(showTime)
  }
},0)