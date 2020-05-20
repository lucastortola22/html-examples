const deg = 6;
const hour = document.querySelector('#p-hr');
const min = document.querySelector('#p-min');
const sec = document.querySelector('#p-sc');

setInterval(()=> {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    
    hour.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${(mm)}deg)`;
    sec.style.transform = `rotateZ(${(ss)}deg)`;
    
});

