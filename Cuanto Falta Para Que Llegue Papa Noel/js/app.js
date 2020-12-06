const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline,days,hours,minutes,seconds) =>{
    const day = document.getElementById(days);
    const hour = document.getElementById(hours);
    const minute = document.getElementById(minutes);
    const second = document.getElementById(seconds);



    const timerUpdate = setInterval( ()=>{
        let t = getRemainTime(deadline);
        day.innerHTML = t.remainDays;
        hour.innerHTML = t.remainHours;
        minute.innerHTML = t.remainMinutes;
        second.innerHTML = t.remainSeconds;
    
        if (t.remainTime <= 1){
            clearInterval(timerUpdate);
            document.getElementById('main').classList.add('main-disabled');
                    }

    },1000 )

};

countdown('Dec 25 2020 00:00:00 GMT-0300', 'days', 'hours', 'minutes', 'seconds');