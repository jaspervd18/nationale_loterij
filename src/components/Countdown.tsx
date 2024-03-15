import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from './ui/card';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <>
        <Card className="flex flex-col shadow-md">
            <CardTitle className='text-center my-6'>Remaining time</CardTitle>
            <CardContent>
                <div className='flex flex-row gap-2 justify-around text-center'>
                    <div className='flex flex-col gap-2 w-16'>
                        <p className='text-6xl font-semibold'>{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}</p> 
                        <p className='text-sm font-light'>days</p>
                    </div>
                    <div className='flex flex-col gap-2 w-16'>
                        <p className='text-6xl font-semibold'>{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</p> 
                        <p className='text-sm font-light'>hours</p>
                    </div>
                    <div className='flex flex-col gap-2 w-16'>
                        <p className='text-6xl font-semibold'>{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</p> 
                        <p className='text-sm font-light'>minutes</p>
                    </div>
                    <div className='flex flex-col gap-2 w-16'>
                        <p className='text-6xl font-semibold'>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</p> 
                        <p className='text-sm font-light'>seconds</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </>
  );
};

export default Countdown;
