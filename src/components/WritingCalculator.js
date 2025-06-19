// components/WritingCalculator.js
import { useState, useEffect } from 'react';

export default function WritingCalculator({ onBandChange }) {
  const [band, setBand] = useState('');

  useEffect(() => {
    const b = parseFloat(band);
    if (!isNaN(b) && b >= 0 && b <= 9) {
      onBandChange(b);
    } else {
      onBandChange(null);
    }
  }, [band]);

  const container = { display: 'flex', flexDirection: 'column' };
  const labelStyle = { marginBottom: '8px', fontWeight: 'bold' };
  const selectStyle = {
    padding: '8px',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
  };

  const options = [];
  for (let i = 0; i <= 18; i++) {
    const val = (i * 0.5).toFixed(1);
    options.push(val);
  }

  return (
    <div style={container}>
      <label style={labelStyle}>Writing Band (0.0–9.0):</label>
      <select
        value={band}
        onChange={e => setBand(e.target.value)}
        style={selectStyle}
      >
        <option value="">-- select --</option>
        {options.map(val => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}
