// components/OverallCalculator.js
/*import { useMemo } from 'react';

export default function OverallCalculator({ listening, reading, writing, speaking }) {
  const computeOverall = () => {
    if (
      listening == null ||
      reading == null ||
      writing == null ||
      speaking == null
    ) {
      return null;
    }
    const avg = (listening + reading + writing + speaking) / 4;
    const floor = Math.floor(avg);
    const dec = avg - floor;
    let overall;
    if (dec >= 0.75) {
      overall = floor + 1;
    } else if (dec >= 0.25) {
      overall = floor + 0.5;
    } else {
      overall = floor;
    }
    return overall.toFixed(1);
  };

  const overall = useMemo(computeOverall, [listening, reading, writing, speaking]);

  const container = { display: 'flex', flexDirection: 'column' };
  const labelStyle = { marginBottom: '8px', fontWeight: 'bold', textAlign: 'center' };
  const valueStyle = { fontSize: '1.5rem', textAlign: 'center', marginBottom: '8px' };
  const infoStyle = { fontSize: '0.9rem', color: '#555', textAlign: 'center' };

  return (
    <div style={container}>
      <div style={labelStyle}>Overall Band Calculator</div>
      <div style={valueStyle}>
        {overall !== null ? overall : 'Enter all four module bands above'}
      </div>
      <div style={infoStyle}>
        (Average rounded to nearest 0.5 or whole band per IELTS rules)
      </div>
      
    </div>
  );
}
*/



// components/OverallCalculator.js
import { useMemo } from 'react';

export default function OverallCalculator({ listening, reading, writing, speaking }) {
  const computeOverallData = () => {
    if (
      listening == null ||
      reading == null ||
      writing == null ||
      speaking == null
    ) {
      return null;
    }
    const avg = (listening + reading + writing + speaking) / 4;
    const floor = Math.floor(avg);
    const dec = avg - floor;
    let rounded;
    if (dec >= 0.75) {
      rounded = floor + 1;
    } else if (dec >= 0.25) {
      rounded = floor + 0.5;
    } else {
      rounded = floor;
    }
    return {
      exact: avg,
      rounded: rounded,
    };
  };

  const overallData = useMemo(
    computeOverallData,
    [listening, reading, writing, speaking]
  );

  const container = { display: 'flex', flexDirection: 'column' };
  const labelStyle = {
    marginBottom: '8px',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  const valueStyle = {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginBottom: '8px',
  };
  const infoStyle = {
    fontSize: '0.9rem',
    color: '#555',
    textAlign: 'center',
    marginBottom: '8px',
  };
  const breakdownStyle = {
    fontSize: '0.9rem',
    color: '#333',
    textAlign: 'center',
    marginTop: '8px',
  };

  return (
    <div style={container}>
      <div style={labelStyle}>Overall Band Calculator</div>
      <div style={valueStyle}>
        {overallData !== null
          ? overallData.rounded.toFixed(1)
          : 'Enter all four module bands above'}
      </div>
      <div style={infoStyle}>
        (Average rounded to nearest 0.5 or whole band per IELTS rules)
      </div>
      {overallData !== null && (
        <>
          <div style={breakdownStyle}>
            Exact average before rounding: {overallData.exact.toFixed(2)}
          </div>
          <div style={breakdownStyle}>
            Breakdown: Listening {listening.toFixed(1)}, Reading {reading.toFixed(1)}, Writing {writing.toFixed(1)}, Speaking {speaking.toFixed(1)}
          </div>
        </>
      )}
    </div>
  );
}
