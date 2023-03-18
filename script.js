const countDownTime = new Date('Nov 07 2023 00:00:00');
function countDown (){
    const today = new Date();
    const remainTime = countDownTime - today;

    const days = Math.floor(remainTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainTime % ( 1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
    const minutes = Math.floor((remainTime % (1000 * 60 * 60 )) / (1000 * 60));
    const seconds = Math.floor((remainTime % (1000 * 60)) / 1000);
    // console.log(remainTime, days, hours, minutes, seconds)
    let countDays, countHours, countMinutes, countSeconds
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if(remainTime < 0){
        clearInterval(countDown)
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    };
}
setInterval(countDown, 1000)