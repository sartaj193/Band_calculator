// pages/index.js
'use client';
import { useState } from 'react';
import ListeningCalculator from '../components/ListeningCalculator';
import ReadingCalculator from '../components/ReadingCalculator';
import WritingCalculator from '../components/WritingCalculator';
import SpeakingCalculator from '../components/SpeakingCalculator';
import OverallCalculator from '../components/OverallCalculator';
import InfoTables from '../components/InfoTables';

export default function Home() {
  const [listeningBand, setListeningBand] = useState(null);
  const [readingBand, setReadingBand] = useState(null);
  const [writingBand, setWritingBand] = useState(null);
  const [speakingBand, setSpeakingBand] = useState(null);

  // Two-column responsive layout
  const pageContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '16px',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box',
    margin: 0,
  };
  const leftStyle = {
    flex: '1 1 300px',
    padding: '16px',
    boxSizing: 'border-box',
  };
  const rightStyle = {
    flex: '1 1 300px',
    padding: '16px',
    boxSizing: 'border-box',
  };
  const sectionStyle = {
    marginBottom: '24px',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };
  const headerStyle = {
    textAlign: 'center',
    marginBottom: '24px',
  };

  return (
    <div style={pageContainer}>
      {/* Left: existing calculators */}
      <div style={leftStyle}>
        <h1 style={headerStyle}>IELTS Band Calculator</h1>

        <div style={sectionStyle}>
          <OverallCalculator
            listening={listeningBand}
            reading={readingBand}
            writing={writingBand}
            speaking={speakingBand}
          />
        </div>

        <div style={sectionStyle}>
          <ListeningCalculator onBandChange={setListeningBand} />
        </div>

        <div style={sectionStyle}>
          <ReadingCalculator onBandChange={setReadingBand} />
        </div>

        <div style={sectionStyle}>
          <WritingCalculator onBandChange={setWritingBand} />
        </div>

        <div style={sectionStyle}>
          <SpeakingCalculator onBandChange={setSpeakingBand} />
        </div>
      </div>

      {/* Right: reference tables */}
      <div style={rightStyle}>
        <InfoTables />
      </div>
    </div>
  );
}
