import '../styles/countdownTimer.css'
import { timeData } from '../data.js'
import { useEffect, useState } from 'react';

function setTwoDigits (argument) {
    return argument > 9 ? argument : '0' + argument;
};

function stopAtZero (argument) {
    return argument > 0 ? argument : 0;
};

export default function CountdownTimer () {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(function updateCurrentTime () {
        const interval = setInterval(function () {
            setCurrentTime(new Date());
        }, 1000);

        return function cleanUp () {
            clearInterval(interval);
        };
    }, []);


    let chosenTime = new Date(timeData),
        differenceTime = chosenTime - currentTime,
        days = setTwoDigits(stopAtZero(Math.floor(differenceTime/1000/60/60/24))),
        hours = setTwoDigits(stopAtZero(Math.floor(differenceTime/1000/60/60)%24)),
        minutes = setTwoDigits(stopAtZero(Math.floor(differenceTime/1000/60)%60)),
        seconds = setTwoDigits(stopAtZero(Math.floor(differenceTime/1000)%60));

    console.log("dias: " + days + " horas: " + hours + " minutos: " + minutes + " segundos: " + seconds)
    return (
        <div className='countdown-timer-wrapper'>
            <div className='count-wrapper'>
                <div id = 'days'>{days}</div>
                <span>Dias</span>
            </div>
            <div className='count-wrapper'>
                <div id = 'hours'>{hours}</div>
                <span>Horas</span>
            </div>
            <div className='count-wrapper'>
                <div id = 'minutes'>{minutes}</div>
                <span>Minutos</span>
            </div>
            <div className='count-wrapper'>
                <div id = 'seconds'>{seconds}</div>
                <span>Segundos</span>
            </div>
        </div>
    );
};