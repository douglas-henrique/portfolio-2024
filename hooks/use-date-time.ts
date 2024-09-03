import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function useDateTime() {
    const [currentTime, setCurrentTime] = useState(DateTime.now().setLocale('pt-BR'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(DateTime.now().setLocale('pt-BR'));
        }, 1000); 

        return () => clearInterval(intervalId);
    }, []);

    return currentTime;
}

export default useDateTime;
