import React, { useEffect, useState } from 'react';

export default function LiveClock({ timezone }) {
  const [time, setTime] = useState(() => formattedTime(new Date(), timezone));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formattedTime(new Date(), timezone));
    }, 1000);

    return () => clearInterval(id); // cleanup on unmount
  }, [timezone]);

  return (
    <div className="live-clock" role="status" aria-live="polite" style={{
      fontFamily: 'system-ui, Roboto, Arial',
      fontSize: '1.5rem',
      fontWeight: 600,
      textAlign: 'center'
    }}>
      {time}
    </div>
  );
}

function formattedTime(date, tz) {
  const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  if (tz) opts.timeZone = tz;
  return date.toLocaleTimeString([], opts);
}
