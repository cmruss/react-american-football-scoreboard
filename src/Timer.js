import React, {useEffect} from 'react';
import { clearInterval, setInterval } from 'timers';

const Timer = (props) => {
    const {active, min, setMin, secs, setSecs} = props;

    useEffect(() =>{
        let interval = null;
        
        if(active) {
            interval = setInterval(() =>{
                setMin(min => min -0.01666667)
                setSecs(secs => secs -1);
            }, 1000);
        }if (min === 0 || secs === 0){
            clearInterval(interval);
        }
        return() => clearInterval(interval);
    }, [active, min, secs]);

    return (`${Math.ceil(min)}:${secs}`);
}
export default Timer;