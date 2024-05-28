import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(52);
  const setTime = () => {
    if (seconds < 59) setSeconds(seconds + 1);
    else {
      setSeconds(0);
      if (minutes < 59) setMinutes(minutes + 1);
      else {
        setMinutes(0);
        if (hours < 23) setHours(hours + 1);
        else {
          setHours(0);
          setDays(days + 1);
        }
      }
    }
  };
  useEffect(() => {
    setTimeout(setTime, 1000);
  });
  return (
    <>
      <div className="heading">TIMER</div>
      <div className="App">
        {days > 0 ? (
          <div className="block">
            <div className="day">{days}</div> <div>DAY</div>
          </div>
        ) : null}
        {hours > 9 ? (
          <div className="block">
            <div className="hour">{hours}</div>
            <div>HH</div>
          </div>
        ) : (
          <div className="block">
            <div className="hour">0{hours}</div>
            <div>HH</div>
          </div>
        )}
        {minutes > 9 ? (
          <div className="block">
            <div className="minute">{minutes}</div>
            <div>MM</div>
          </div>
        ) : (
          <div className="block">
            <div className="minute">0{minutes}</div>
            <div>MM</div>
          </div>
        )}
        {seconds > 9 ? (
          <div className="block">
            <div className="second">{seconds}</div>
            <div>SS</div>
          </div>
        ) : (
          <div className="block">
            <div className="second">0{seconds}</div>

            <div>SS</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
