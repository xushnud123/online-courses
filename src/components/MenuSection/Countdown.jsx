import React ,{useEffect ,useRef, useState } from 'react';
import '../sass/Countdown.scss';

const Countdown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countdownData = new Date("October 30, 2021  00:00:00").getTime();

        interval = setInterval(() =>{
            const now = new Date().getTime();
            const distance = countdownData - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

            if(distance < 0) {
                clearInterval(interval.current);
            }
            else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    },[]);

    return (
        <div className="countdown">
            <div className="timer">
                <h2>Первый курс <br/> по компьютерной сборке</h2>
            </div>
            <div className="timer_content">
                <section>
                    <p>{timerDays}</p>
                    <span>
                        <small>Days</small>
                    </span>
                </section>
                <section>
                    <p>{timerHours}</p>
                    <span>
                        <small>Hours</small>
                    </span>
                </section>
                <section>
                    <p>{timerMinutes}</p>
                    <span>
                        <small>Minutes</small>
                    </span>
                </section>
                <section>
                    <p>{timerSeconds}</p>
                    <span>
                        <small>Seconds</small>
                    </span>
                </section>
            </div>
        </div>
    );
}

export default Countdown;