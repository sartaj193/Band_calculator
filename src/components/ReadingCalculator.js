// components/ReadingCalculator.js
import React, { useState, useEffect } from 'react';

export default function ReadingCalculator({ onBandChange }) {
  const [mode, setMode] = useState('raw'); // 'raw' or 'band'
  const [raw, setRaw] = useState('');
  const [bandInput, setBandInput] = useState('');
  const [testType, setTestType] = useState('academic'); // only for raw mode
  const [computedBand, setComputedBand] = useState(null);

  const readingAcadMap = [
    { min: 39, max: 40, band: 9.0 },
    { min: 37, max: 38, band: 8.5 },
    { min: 35, max: 36, band: 8.0 },
    { min: 33, max: 34, band: 7.5 },
    { min: 30, max: 32, band: 7.0 },
    { min: 27, max: 29, band: 6.5 },
    { min: 23, max: 26, band: 6.0 },
    { min: 19, max: 22, band: 5.5 },
    { min: 15, max: 18, band: 5.0 },
    { min: 13, max: 14, band: 4.5 },
    { min: 10, max: 12, band: 4.0 },
    { min: 8, max: 9, band: 3.5 },
    { min: 6, max: 7, band: 3.0 },
    { min: 4, max: 5, band: 2.5 },
    { min: 2, max: 3, band: 2.0 },
    { min: 1, max: 1, band: 1.0 },
    { min: 0, max: 0, band: 0.0 },
  ];
  const readingGenMap = [
    { min: 40, max: 40, band: 9.0 },
    { min: 39, max: 39, band: 8.5 },
    { min: 37, max: 38, band: 8.0 },
    { min: 36, max: 36, band: 7.5 },
    { min: 34, max: 35, band: 7.0 },
    { min: 32, max: 33, band: 6.5 },
    { min: 30, max: 31, band: 6.0 },
    { min: 27, max: 29, band: 5.5 },
    { min: 23, max: 26, band: 5.0 },
    { min: 19, max: 22, band: 4.5 },
    { min: 15, max: 18, band: 4.0 },
    { min: 12, max: 14, band: 3.5 },
    { min: 9, max: 11, band: 3.0 },
    { min: 6, max: 8, band: 2.5 },
    { min: 4, max: 5, band: 2.0 },
    { min: 2, max: 3, band: 1.0 },
    { min: 1, max: 1, band: 0.5 },
    { min: 0, max: 0, band: 0.0 },
  ];

  // compute when raw or testType changes
  useEffect(() => {
    if (mode !== 'raw') return;
    const n = parseInt(raw, 10);
    if (!isNaN(n) && n >= 0 && n <= 40) {
      const map = testType === 'academic' ? readingAcadMap : readingGenMap;
      const entry = map.find(e => n >= e.min && n <= e.max);
      const b = entry ? entry.band : null;
      setComputedBand(b);
      onBandChange(b);
    } else {
      setComputedBand(null);
      onBandChange(null);
    }
  }, [raw, testType, mode]);

  // compute when bandInput changes
  useEffect(() => {
    if (mode !== 'band') return;
    const v = parseFloat(bandInput);
    if (!isNaN(v) && v >= 0 && v <= 9) {
      setComputedBand(v);
      onBandChange(v);
    } else {
      setComputedBand(null);
      onBandChange(null);
    }
  }, [bandInput, mode]);

  const container = { display: 'flex', flexDirection: 'column' };
  const labelStyle = { marginBottom: '8px', fontWeight: 'bold' };
  const radioContainer = { marginBottom: '12px' };
  const inputStyle = {
    padding: '8px',
    fontSize: '1rem',
    marginBottom: '12px',
    width: '100%',
    boxSizing: 'border-box',
  };
  const selectStyle = { ...inputStyle };
  const resultStyle = { fontSize: '1.1rem' };

  const bandOptions = Array.from({ length: 19 }).map((_, i) =>
    (i * 0.5).toFixed(1)
  );

  return (
    <div style={container}>
      <div style={labelStyle}>Reading:</div>
      <div style={radioContainer}>
        <label style={{ marginRight: '12px' }}>
          <input
            type="radio"
            name="reading-mode"
            value="raw"
            checked={mode === 'raw'}
            onChange={() => {
              setMode('raw');
              setBandInput('');
              setRaw('');
              setComputedBand(null);
              onBandChange(null);
            }}
          />{' '}
          Enter raw score
        </label>
        <label>
          <input
            type="radio"
            name="reading-mode"
            value="band"
            checked={mode === 'band'}
            onChange={() => {
              setMode('band');
              setRaw('');
              setBandInput('');
              setComputedBand(null);
              onBandChange(null);
            }}
          />{' '}
          Enter band
        </label>
      </div>

      {mode === 'raw' ? (
        <>
          <label style={labelStyle}>Test Type:</label>
          <select
            value={testType}
            onChange={e => setTestType(e.target.value)}
            style={selectStyle}
          >
            <option value="academic">Academic</option>
            <option value="general">General Training</option>
          </select>
          <label style={labelStyle}>Raw Score (0–40):</label>
          <input
            type="number"
            min="0"
            max="40"
            step="1"
            value={raw}
            onChange={e => setRaw(e.target.value)}
            style={inputStyle}
            placeholder="Enter raw score"
          />
        </>
      ) : (
        <>
          <label style={labelStyle}>Band (0.0–9.0):</label>
          <select
            value={bandInput}
            onChange={e => setBandInput(e.target.value)}
            style={selectStyle}
          >
            <option value="">-- select --</option>
            {bandOptions.map(val => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </>
      )}

      <div style={resultStyle}>
        Resulting Band:{' '}
        {computedBand !== null ? computedBand.toFixed(1) : '-'}
      </div>
    </div>
  );
}
